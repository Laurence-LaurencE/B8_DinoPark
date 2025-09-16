import { Router } from "express";
import { PaymentController } from "../controllers/PaymentController";

//
const paymentRouter = Router();

//paymentform

//test

// paymentRouter.get("/", (request, response) => {
//   const controller = new PaymentController(request, response);
//   controller.paymentpage();
// });

//Add get _ afficher form
paymentRouter.get("/addpayment", (request, response) => {
  const controller = new PaymentController(request, response);
  controller.createPayment();
});

// Add POST - traiter le formulaire
paymentRouter.post("/traitement", (request, response) => {
  const controller = new PaymentController(request, response);
  controller.addPayment();
});

//put 

export default paymentRouter;
