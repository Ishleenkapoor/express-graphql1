import express from 'express';
import {optionsForGetUser} from './getUser.js'
import { optionsForGetAppointment } from './getAppointment.js';
import { optionsForGetRoles } from './getRoles.js';
const app = express();

const endpoint = "https://smiling-frog-23.hasura.app/v1/graphql";

app.set("view engine","ejs");

app.get("/",(req,res) =>{
    res.render('index')
})

app.get("/getUser",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetUser);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})

app.get("/getAppointments",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetAppointment);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})

app.get("/getRoles",async (req,res) => {
    const response = await fetch(endpoint, optionsForGetRoles);
    const result = await response.json();

    console.log(result.data); // data
    res.send(result);
    
})


app.listen(8000,() =>{
    console.log("running on port no 8000");
});