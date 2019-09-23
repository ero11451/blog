const express = require('express')
const router = express.Router()
// const fetch = require('node-fetch')s
var request = require('request');
router.get("/",async (req:any,res:any,)=>{

const url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-17&sortBy=publishedAt&apiKey=b74429b83d86451c970818fbc03b3d5a"

return request(url, (error:any, response:any, body:any) => {
    if (error) {
        console.log(error)
        res.send(error)
    }else if(response){
       res.send(JSON.stringify(response))
    }else if (body) {
        res.send(body)
    }
    
});
})

export const newsApi = router;