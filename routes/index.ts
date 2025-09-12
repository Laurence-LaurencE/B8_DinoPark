import { Router } from "express";
//importer tous mes "ss-routers" :
import bookingRouter from "./bookingRouter";
import globalRouter from "./globalRouter";
import paymentRouter from "./paymentRouter";

// lui donner 1 const qui contient la fonction Route

const router = Router(); // contient le chemin

// puis utilise le chemin : 
// (ci-dessous on lie les autres routers à l'indexRacine)
router.use(globalRouter);
router.use(`/booking`, bookingRouter);
router.use(`/payment`, paymentRouter);

//

export default router;





// // ci-dessous lier les autres routers à l'indexRacine
// router.post("/api/reservation/create", (req, res) => {
//     const body = req.body;
//     // body contient les données du formulaire
//     //  verification de la donnée si tu veux  
//     //  connexion à la base de données dans un autre fichier  => .env
//     //  importer la connexion
//     //  realiser la reqeute qui permet de faire insert into
//     //  recuperer la res
