import {Router} from 'express';
import UserController from './controller';
const userRouter:Router=Router();
userRouter.get("/get",UserController.allUsers);
userRouter.get("/get/:id",UserController.showUser);
userRouter.post("/post",UserController.addUser);
userRouter.put("/put/:id",UserController.updateUser);
userRouter.delete("/delete",UserController.deleteUser);

export default userRouter;
