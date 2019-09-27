var jwt = require('jsonwebtoken');
const ValidateToken = async(req:any,res:any,next:any)=>{  
const token = req.headers["x-access-token"] || req.headers["authorization"];
   
    if (!token) {
        return res.status(401)
        .send(JSON.stringify(`Access denied. No token provided`))
    }
   try {
     const decoded =  await jwt.verify(token,"muyi")
      req.user = decoded
      next()
   } catch (error) {
     res.send(error)
   }
}
export const validateToken = ValidateToken