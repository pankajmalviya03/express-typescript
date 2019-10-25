import * as expresss from 'express';
import { Request, Response } from "express";
import {userModel} from "../../repositories/user/UserModel";
class UserController{
     allUsers = (req: Request, res: Response) => {
      const users = userModel.find((err: any, users: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(users);
        }
      });
    };
    
      showUser = (req: Request, res: Response) => {
      const user = userModel.findById(req.params.id, (err: any, user: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(user);
        }
      });
    };
    
      addUser = (req: Request, res: Response) => {
      const user = new userModel(req.body);
      user.save((err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(user);
        }
      });
    };
    
      updateUser = (req: Request, res: Response) => {
      let user = userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, user: any) => {
          if (err) {
            res.send(err);
          } else {
            res.send(user);
          }
        }
      );
    };
    
     deleteUser = (req: Request, res: Response) => {
      const user = userModel.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("User deleted from database");
        }
      });
    };
}
export default new UserController;