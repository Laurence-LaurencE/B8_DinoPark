import { Controller } from "../libs/Controller";

export class GlobalsController extends Controller {
    public homepage() {
        this.response.render("pages/home");
    }
}

// + page dinos => A faire (browse)



