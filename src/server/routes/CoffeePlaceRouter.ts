import { Router, Request, Response, NextFunction } from "express";

import CoffeePlaceStore from "../stores/CoffeePlaceStore";
import {CoffeePlace} from "../stores/CoffeePlaceStore";

const coffeePlaces: Array<CoffeePlace> = [
  {
    id: "1",
    title: "Зерне",
    city: "Минск",
    latitude: 53.912425882898575,
    longitude: 27.580705671933323,
    description: "Классика жанра: хипстеры, ноутбуки, всё как вы любите.",
    address: "пр-т Независимости, 46",
    timetable: "с 9 до 23",
    imageUrl: "zerne.jpg"
  },
  {
    id: "2",
    title: "Зерне-2",
    city: "Минск",
    latitude: 53.9085315340473,
    longitude: 27.581397050742485,
    description: "У нас есть большой стол и мы следим за вами из кухни.",
    address: "ул. Козлова, 6",
    timetable: "с 8 до 23",
    imageUrl: "zerne2.jpg"
  },
  {
    id: "3",
    title: "Coffee & кава",
    city: "Минск",
    latitude: 53.909073819633996,
    longitude: 27.57374138569154,
    description: "Грустная девушка и лимонный пирог ждут вас.",
    address: "пр-т Независимости, 35",
    timetable: "с 9 до 23",
    imageUrl: "coffeekava.jpg"
  },
  {
    id: "4",
    title: "Порапо",
    city: "Минск",
    latitude: 53.91081530025115,
    longitude: 27.576668560869464,
    description: "Первая в Минске умная кофе-машина, мы её вообще не контролируем.",
    address: "пр-т Машерова, 1",
    timetable: "с 8 до 23",
    imageUrl: "porapo.jpg"
  }
];

export class CoffeePlaceRouter {
  router: Router

  /**
   * Initialize router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all coffee places.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {

    CoffeePlaceStore.getAll().then((coffeePlaces) => {
      res.send(coffeePlaces);
    });
  }

  /**
   * GET one coffee place by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = req.params.id;
    // let coffeePlace = coffeePlaces.filter(coffeePlace => coffeePlace.id === query);
    let coffeePlace = {};
    if (coffeePlace) {
      res.status(200)
        .send({
          message: "Success",
          status: res.status,
          coffeePlace
        });
    } else {
      res.status(404)
        .send({
          message: "No coffee place found with the given id.",
          status: res.status
        });
    }
  }

  /**
   * Take each handler, and attach to one of the Express.Router"s
   * endpoints.
   */
  init() {
    this.router.get("/", this.getAll);
    this.router.get("/:id", this.getOne);
  }

}

// create the router, and export its configured Express.Router
const coffeePlaceRoutes = new CoffeePlaceRouter();
coffeePlaceRoutes.init();

export default coffeePlaceRoutes.router;