import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

import * as mongodb from "mongodb";

import CoffeePlaceRouter from "./routes/CoffeePlaceRouter";

// creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    // run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();

//         const mongoClient = mongodb.MongoClient;
//         const url = "mongodb://admin:admin@ds147789.mlab.com:47789/coffee-please_dev";

//         mongoClient.connect(url, (error, db) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("Connected succesfully");

//                 const coffeePlaces = [
//   {
//     id: "1",
//     title: "Зерне",
//     city: "Минск",
//     latitude: 53.912425882898575,
//     longitude: 27.580705671933323,
//     description: "Классика жанра: хипстеры, ноутбуки, всё как вы любите.",
//     address: "пр-т Независимости, 46",
//     timetable: "с 9 до 23",
//     imageUrl: "zerne.jpg"
//   },
//   {
//     id: "2",
//     title: "Зерне-2",
//     city: "Минск",
//     latitude: 53.9085315340473,
//     longitude: 27.581397050742485,
//     description: "У нас есть большой стол и мы следим за вами из кухни.",
//     address: "ул. Козлова, 6",
//     timetable: "с 8 до 23",
//     imageUrl: "zerne2.jpg"
//   },
//   {
//     id: "3",
//     title: "Coffee & кава",
//     city: "Минск",
//     latitude: 53.909073819633996,
//     longitude: 27.57374138569154,
//     description: "Грустная девушка и лимонный пирог ждут вас.",
//     address: "пр-т Независимости, 35",
//     timetable: "с 9 до 23",
//     imageUrl: "coffeekava.jpg"
//   },
//   {
//     id: "4",
//     title: "Порапо",
//     city: "Минск",
//     latitude: 53.91081530025115,
//     longitude: 27.576668560869464,
//     description: "Первая в Минске умная кофе-машина, мы её вообще не контролируем.",
//     address: "пр-т Машерова, 1",
//     timetable: "с 8 до 23",
//     imageUrl: "porapo.jpg"
//   }
// ];

//                 const collection = db.collection("coffeePlaces");
//                 collection.insertMany(coffeePlaces, (error, result) => {
//                     if (error) {
//                         console.log(error);
//                     } else {
//                         console.log(result);
//                     }
//                 });
//             }

//             db.close();
//         });
    }

    // configure Express middleware.
    private middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        this.express.use("/client", express.static(path.join(__dirname, "client")));
    }

    // configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we"ve got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get("/", (req, res, next) => {
            res.json({
                message: "Hello World!"
            });
        });
        this.express.use("/", router);
        this.express.use("/api/v1/coffeePlaces", CoffeePlaceRouter);
    }

}

export default new App().express;