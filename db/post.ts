const Sequelize = require("sequelize")
import { connectdb }  from "./dbconnect"
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

