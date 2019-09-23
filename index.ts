import { loginUser } from "./user/login";
import { inputValidation } from "./validation/validateInput";
import { newsApi } from "./api/news";
import { makepost } from "./feeds/post";
import { allPost } from "./feeds/allpost";
import { mypost } from "./feeds/getmypost";
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
const { connectdb }= require("./db/dbconnect");
const { regUser }= require("./user/regUser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/mypost",mypost)
app.use( "/allpost",allPost )
app.use("/reg",inputValidation, regUser)
app.use("/login", inputValidation, loginUser)
app.get('/',(req:any, res:any) => res.send(req.body.userName))
app.use("/",makepost)
app.use("/news",newsApi)

connectdb
   .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(() => {
    console.error('Unable to connect to the database:');
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))