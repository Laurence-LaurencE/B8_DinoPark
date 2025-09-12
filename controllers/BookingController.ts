import { Controller } from "../libs/Controller";
//import repository  => à la place de nos const ci-dessous :
const booking = [
    { id: 1, booking_date: "2025"},
    { id: 2, booking_date: "2025"},
]
// book = [
    //id:,
    //ticket_quantity: ,
    //total_price: ,
    //id_ticket: ,
// ]
// ticket = [
    //id:,
    //intitulé:,
    //unit_price: ,
// ]



export class BookingController extends Controller {
    browseBooking() {
        const success = this.request.query.success; 
        let flash = null;

        if(success === "true") {
            flash = {
                type: "success",
                message: "la réservation a bien été créée.",
            };
        } else if (success === "false") {
            flash = {
                type: "error",
                message: "une erreur est survenue lors de la création de la réservation.",
            };
        }

        this.response.render("pages/booking.ejs", {
            //ici mettre propriété booking (class booking)
            flash,
        });
    }

    public createBooking() {
        this.response.render("pages/booking.ejs")
    }

    // A MODIFIER l'insertion de la BDD :
    public addBooking() {
        //code temporaire en attendant la BDD :
        this.response.send("addBooking pas encore implémenté 🚧 Modifier lignes ci-dessous :");

        // const newBooking = {
        //     id: booking.lenght +1,
        //     booking_date: Date,
        //     ticket_quantity: Number,
        //     id_ticket: ,
        // }
    }

}
