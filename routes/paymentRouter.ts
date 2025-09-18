import { response, Router } from "express";
import { PaymentController } from "../controllers/PaymentController";
import { request } from "node:http";

//
const paymentRouter = Router();

//paymentform

//pas besoin de get pour lire : 
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

//confirmation


//get /:id
paymentRouter.get("/confirmation",(request,response) => {
  const controller = new PaymentController(request, response);
  controller.confirmation();
})

export default paymentRouter;
