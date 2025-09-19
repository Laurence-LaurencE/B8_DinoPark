import { Pool } from "pg";
import { Database } from "../libs/datas";

export abstract class Repository {
    protected pool: Pool;

    constructor(){
        this.pool = Database.getPool();
    }



}