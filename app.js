const { json } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=ee8eaf75f184e4c9292e2848991eaa73&units=metric"
    
    https.get(url, function(response){
        console.log(response.statusCode);
    
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const description = weatherData.weather[0].description
            console.log(description)
        })
    })

    res.send("Server is up and running.")
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");
})