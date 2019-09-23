import { validateToken } from "../validation/validateToken"
import { postModel } from "../db/database"

const express = require('express')
const router = express.Router()


router.get("/", validateToken, async (req:any,res:any,next:any)=>{
    const userName = req.user.user.userName
    const userPost = await postModel.findOne({where:{createdBy:userName}})
    .catch((err:any) => {
           res.send(err.message)
      })
     res.send(userPost)
})

export const mypost = router
