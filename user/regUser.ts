const bcrypt = require('bcrypt');
const express = require('express')
const router = express.Router()
const { userModel} = require("../db/database");

router.post("/",async (req :any,res:any, next:any)=>{
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email
    
     bcrypt.genSalt(10, (err:any, salt:any)=>{
      bcrypt.hash(password,salt, (err:any,passhash:any)=>{
        if (err) {
          return err
        }
       if (passhash) {
         try {
            userModel.create({ userName:userName,password:passhash,email:email })
           .then((user:any)=>{
            res.send(JSON.stringify(user))
           }).catch((errors:any)=>{
             res.send(errors.errors)
          })
        } catch (error) {
         res.send(`${error.message}`)
         }
       }
      })
    })

})

export const regUser = router;