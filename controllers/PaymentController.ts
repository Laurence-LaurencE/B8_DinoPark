import { Controller } from "../libs/Controller";

//import repository  => à la place de nos const ci-dessous :
const Payment = [
    { id: 1, price: "2000"},
    { id: 2, price: "2000"},
]

export class PaymentController extends Controller {
    public paymentpage() {
        this.response.render("pages/payment");
    }

    public createPayment() {
        this.response.render("pages/payment");
    }

    public addPayment() {
        this.response.render("pages/payment");
    }

    public confirmation() {
        this.response.render("pages/confirmation");
    }

}

