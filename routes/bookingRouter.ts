import { response, Router } from "express";
import { BookingController } from "../controllers/BookingController";

//proposé par Miriem mais pas utile
// import { log } from "node:console";
// import { request } from "node:http";

const bookingRouter = Router();

//bookingform _ browse
bookingRouter.get("/", (request, response) => {
    const controller = new BookingController(request, response);
    controller.browseBooking();
});

//Add get _ afficher form
bookingRouter.get("/add", (request, response) => {
    const controller = new BookingController(request, response);
    controller.createBooking();
});

//Add post _ traiter form
// bookingRouter.post("/", (request, response) => {
//     const controller = new BookingController(request, response);
//     controller.addBooking();
    
// });


export default bookingRouter;
