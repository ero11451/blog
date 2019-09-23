import { validateToken } from "../validation/validateToken"
import { postModel } from "../db/database"

const express = require('express')
const router = express.Router()


router.get("/", validateToken, async (req:any,res:any,next:any)=>{
    const post = await postModel.findAll()
    .catch((err:any) => {
      res.send(post)
  })
 res.send(post)
})

export const allPost = router


   