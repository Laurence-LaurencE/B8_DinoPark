import { response, Router } from "express";
import { BookingController } from "../controllers/BookingController";

//proposé par Miriem mais pas utile
// import { log } from "node:console";
// import { request } from "node:http";

const bookingRouter = Router();

//bookingform _ browse
bookingRouter.get("/all-bookings", (request, response) => {
  const controller = new BookingController(request, response);
  controller.browseBooking();
});

//Add get _ afficher form
bookingRouter.get("/addget-booking", (request, response) => {
  const controller = new BookingController(request, response);
  controller.createBooking();
});

// Add post _ traiter form
// A REMETTRE ds le code avec la BDD :
bookingRouter.post("/post_booking", (request, response) => {
  const controller = new BookingController(request, response);
  controller.addBooking();
});

export default bookingRouter;
