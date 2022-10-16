import {initDB} from "./db/index.js";

initDB().then(()=>{
    console.log("Data Base Created correctly.");
});