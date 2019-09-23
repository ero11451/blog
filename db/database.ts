const Sequelize = require("sequelize")
import { connectdb }  from "./dbconnect"

export const userModel = connectdb.define('userModel', {
        userName: {
           require:true,
           type: Sequelize.STRING,
           unique:true
          },
          email:{
           require:true,
           type:Sequelize.STRING,
           unique:true
          },
         password:{
           type:Sequelize.STRING,
         },
         user_id:{
           type:Sequelize.INTEGER,
           autoIncrement: true,
           primaryKey: true           
         }
})
userModel.sync({ alter:true })
    .then((user:any) => {
      console.log(`user table created${user}`);
    }).catch((error:any)=>{
      console.log(error);
    })
    
export const postModel = connectdb.define('postModel', {
      title: {
       type: Sequelize.STRING(50),
      },
      message:{
         type:Sequelize.TEXT,
      },
     creator_id:{
      type:Sequelize.INTEGER,
     },
     createdBy:{
         type:Sequelize.STRING,
         require:true,
     }
})

postModel.sync({ alter: true })
.then((post:any) => {
  console.log(`post table created ${post}`);
}).catch((error:any)=>{
  console.log(error);
})




