import {IConfig} from './config/IConfig';
import {configuration} from './config/configuration';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import {notFound} from './libs/Routes/notFoundRoute';
import {errorHandler} from  './libs/Routes/errorHandler';
import userRouter from './controllers/user/routes';
import database from './libs/database'

class Server
{
    private port:number;
    public app;

    constructor(configuration){
        this.port=configuration.port;
        this.app=express();
    }
    public initBodyParser=()=>
    {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extented:false}));
    }

    public bootstrap(){
        this.initBodyParser();
        this.setupRoutes();
        return this
    }

    public setupRoutes()
    {
        this.app.use("/api",userRouter);
        this.app.use(notFound);
        this.app.use(errorHandler);
    }
    run()
    {
        database.open({mongoUrl:configuration.mongo_url}).then(()=>{
        this.app.listen(this.port,()=>{
            console.log(`server running on ${this.port}`)
        })
        })
    }
}
export default Server