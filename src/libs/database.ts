import * as mongoose from 'mongoose';
import { promises } from 'fs';
import {seedData} from './seedData';

class database{
    public static open({mongoUrl}){
        return new Promise((resolve,reject)=>{
           mongoose.connect(mongoUrl,{useNewUrlParser:true});

           mongoose.connection.on("error",(err)=>{
           console.log("mongoose connection error"+err);
           reject("Error");
           });
           mongoose.connection.on("connected",()=>{
           console.log("database connected successfully!!");
           seedData();
           resolve();
           });
        })

    }
    public static close(){
       mongoose.disconnect();
    }
}
export default database;