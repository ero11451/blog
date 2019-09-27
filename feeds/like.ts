import express from "express"
import { validateToken } from "../validation/validateToken"
import { postModel, likesModel, userModel } from '../db/database';


const router =  express.Router()

router.post("/:postid/like/:like/user/:id",validateToken, async (req,res)=>{
     
     const userid = req.params.id
     const postid = req.params.postid
     const like = req.params.like

     if (like === "like") {
         try {
          likesModel.create({postid:postid,like:"like",userid:userid})
          .catch((err:any) => {
            res.send(err.message)    
            })
            .then((respon:any)=>{
                res.send(JSON.stringify(respon))
            })        
            } catch (err) {
                    res.send(err)
                }
       
     }
    if (like === "unlike")  {
        try {
            likesModel.create({postid:postid,like:"unlike",userid:userid})
            .catch((err:any) => {
                res.send(err)    
            })
            .then((value:any) => {
                res.send(value)
            })
           
             } catch (err) {
                 res.send(err)
             }
     }
  
})

export const like = router