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

export const likesModel = connectdb.define("likeModel",{
      postid:{
        type:Sequelize.INTEGER
      },
      like:{
        type: Sequelize.STRING
      },
      userid:{
        type:Sequelize.INTEGER,
        // unique:true
      }
    
})

export const commentModel = connectdb.define("commentModel",{
  postid:{
    type:Sequelize.INTEGER
  },
  comment:{
    type:Sequelize.STRING,
  },
  commentby:{
    type:Sequelize.STRING
  },
  // commentid:{
  //   type:Sequelize.INTEGER,
  //   autoIncrement: true,
  // }
})

commentModel.sync({alter:true}).then((comment:any)=>{
   console.log(`comment was created ${comment}`)
}).catch((error:any)=>{
  console.log(error)
})

postModel.sync({ alter: true })
.then((post:any) => {
  console.log(`post table created ${post}`);
}).catch((error:any)=>{
  console.log(error);
})

likesModel.sync({ alter: true })
.then((post:any) => {
  console.log(`post table created ${post}`);
}).catch((error:any)=>{
  console.log(error);
})


userModel.sync({ alter:true })
    .then((user:any) => {
      console.log(`user table created${user}`);
    }).catch((error:any)=>{
      console.log(error);
    })
    

