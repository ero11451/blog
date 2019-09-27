import { validateToken } from "../validation/validateToken"
import { postModel } from "../db/database"


const express = require('express')
const router = express.Router()

router.post("/",validateToken , async (req:any,res:any)=>{
      const user_id = req.user.user.user_id
      const userName = req.user.user.userName
      const title = req.body.title
      const message = req.body.message
      
      await postModel.create({ 
            createdBy:userName,
            title:title,
            message:message,
            creator_id:user_id
       })
      .then((post:any)=>{
       res.send(JSON.stringify(post))
      }).catch((errors:any)=>{
        res.send(errors.errors)
     })
})
export const makepost = router