import { MongoClient, Db } from "mongodb";

export interface CoffeePlace {
    id: string;
    title: string;
    description: string;
    city: string;
    address: string;
    latitude: number;
    longitude: number;
    timetable: string;

    imageUrl: string;
    // menu: Array<MenuItem>;
}

const url = "mongodb://admin:admin@ds147789.mlab.com:47789/coffee-please_dev";

class CoffeePlaceStore {
    public getAll(): Promise<Array<CoffeePlace>> {
        const promise = new Promise<Array<CoffeePlace>>((resolve, reject) => {
            this.getConnection(url).then((db) => {
                const collection = db.collection("coffeePlaces");

                collection.find({}).toArray((error, coffeePlaces) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        console.log(coffeePlaces);
                        resolve(coffeePlaces);
                    }
                });
            });
        });

        return promise;
    }

    private getConnection(url: string): Promise<Db> {
        var promise = new Promise<Db>((resolve, reject) => {
            MongoClient.connect(url, (error, db) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Connected");
                    resolve(db);
                }
            });
        });

        return promise;
    }
}

const coffeePlaceStore = new CoffeePlaceStore();

export default coffeePlaceStore;