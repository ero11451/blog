import { postModel, commentModel } from "../db/database"
import { validateToken } from "../validation/validateToken";


const express = require('express')
const router = express.Router()

router.post("/",validateToken, async (req:any,res:any,next:any)=>{
      const user = req.user.user.userName
      const postid = req.params.id
      const comment = req.body.comment
       
      const findPost = await postModel.findOne({where:{id:postid}})
      .catch((err:any) => {
             res.send(err.message)
        }) 
        if (!findPost) {
            res.send("post was not found please make comment to a valide post")
        }
       const getpostid = findPost.id
       commentModel.create({ commentby:user,postid:getpostid,comment:comment })
       .then((result:any) => {
                res.send(result)
       }).catch((err:any) => {
           res.send(err)
       });

})

export const comment = router


