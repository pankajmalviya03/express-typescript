import {userRepo} from '../repositories/user/UserRepository';

export const seedData=()=>{
    userRepo.count().then((result)=>{
        if(result===0)
        {
            userRepo.create({email:"pankaj.malviya@successive.tech",password:"pankaj"});
        }

    });
}