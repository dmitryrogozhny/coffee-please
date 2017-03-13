"use strict";
var mongodb_1 = require("mongodb");
var url = "mongodb://admin:admin@ds147789.mlab.com:47789/coffee-please_dev";
var CoffeePlaceStore = (function () {
    function CoffeePlaceStore() {
    }
    CoffeePlaceStore.prototype.getAll = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.getConnection(url).then(function (db) {
                var collection = db.collection("coffeePlaces");
                collection.find({}).toArray(function (error, coffeePlaces) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                    else {
                        console.log(coffeePlaces);
                        resolve(coffeePlaces);
                    }
                });
            });
        });
        return promise;
    };
    CoffeePlaceStore.prototype.getConnection = function (url) {
        var promise = new Promise(function (resolve, reject) {
            mongodb_1.MongoClient.connect(url, function (error, db) {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                else {
                    console.log("Connected");
                    resolve(db);
                }
            });
        });
        return promise;
    };
    return CoffeePlaceStore;
}());
var coffeePlaceStore = new CoffeePlaceStore();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coffeePlaceStore;
