import {IConfig} from './config/IConfig';
import {configuration} from './config/configuration';
import Server from './server';

const server:Server=new Server(configuration);
server.bootstrap().run();