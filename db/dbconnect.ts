const Sequelize = require('sequelize');
import {  DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config";

export const connectdb = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
  host: DB_HOST,
    dialect: "mysql",
});
