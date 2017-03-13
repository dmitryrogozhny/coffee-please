"use strict";
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var CoffeePlaceRouter_1 = require("./routes/CoffeePlaceRouter");
// creates and configures an ExpressJS web server.
var App = (function () {
    // run configuration methods on the Express instance.
    function App() {
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
    App.prototype.middleware = function () {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use("/client", express.static(path.join(__dirname, "client")));
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we"ve got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // placeholder route handler
        router.get("/", function (req, res, next) {
            res.json({
                message: "Hello World!"
            });
        });
        this.express.use("/", router);
        this.express.use("/api/v1/coffeePlaces", CoffeePlaceRouter_1.default);
    };
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
