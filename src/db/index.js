import { open } from "sqlite";
import sqlite3 from "sqlite3";

async function getDBHandler(){
    try {
        const dbHandler = await open({
            filename: "todoslist.db",
            driver: sqlite3.Database,
        });

        if(!dbHandler) throw new TypeError('DB Handler expected got' + dbHandler);
        
        return dbHandler;
    } catch (error) {
        console.error('Something went wrong when trying to create the DB Handler (f-getDBHandler):' + error);
    }
}

async function initDB(){
    try {
        //Open the conection with the DB
        const dbHandler = await getDBHandler();

        //Create a new table in the DB todoslist
        await dbHandler.exec("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT, description TEXT, is_done INTEGER DEFAULT 0);");

        //Close the conection with the DB
        await dbHandler.close();
    } catch (error) {
        console.error('Something went wrong when trying to create the DB Handler (f-initDB):' + error);
    }
}

export {getDBHandler, initDB};