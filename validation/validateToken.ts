var jwt = require('jsonwebtoken');

const ValidateToken = async(req:any,res:any,next:any)=>{
  
const token = req.headers["x-access-token"] || req.headers["authorization"];
   
    if (!token) return res.status(401).send(JSON.stringify(`Access denied. No token provided`));
    try {
         jwt.verify(token,"muyi",(err:any, decoded:any)=> {
           if (err) {
               req.send(`there was an error in your token${err}`)
            } else if(decoded){
               req.user = decoded;
              next()
            }
          });
    } catch (error) {
         res.status(400).send(JSON.stringify(error.message));
    }
   

   
}
export const validateToken = ValidateToken