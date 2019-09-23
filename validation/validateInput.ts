const Joi = require('@hapi/joi');
 
export const inputValidation = async(req:any,res:any,next:any)=>{
   
    const userName = req.body.userName ;
    const password  = req.body.password ;
    const email = req.body.email;

    const schema = Joi.object().keys({
        userName: Joi.string().min(3).max(30).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    })

    const validate =  await schema.validate({ userName: userName,password:password,email:email })
        if (validate.error) {
            res.send( JSON.stringify(validate.error.details))
        }
        if (validate) {
            console.log(`user validated`)
        }
        next()
     }
    //  ,s,dklksd