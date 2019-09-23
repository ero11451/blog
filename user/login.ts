const express = require('express');
const router = express.Router();
const {userModel} = require("../db/database");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/" , async(req:any,res:any, next:any)=>{
    const userName = req.body.userName ;
    const password  = req.body.password ;
    const email = req.body.email; 
    const user = await userModel.findOne({where:{userName:userName,email:email}})
    .catch((error:any)=>{
        console.log(error)
      })
      if (!user) {
         res.send(JSON.stringify(`user was not found with the user name ${userName}`))
      }else if(user){
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
          res.send(JSON.stringify("the password you provided is not correct") )
        }else{
          const token = jwt.sign({user}, 'muyi');
           res.send(token) 
        }
      }
})
            
export const loginUser = router;