import { Router } from "express";
import { GlobalsController } from "../controllers/GlobalsController";

//
const globalRouter = Router();

// Route Home page _ browse/get
globalRouter.get("/", (request, response) => {
  const controllers = new GlobalsController(request, response);
  controllers.homepage();
});

// Route les Dinos du Park


export default globalRouter;
