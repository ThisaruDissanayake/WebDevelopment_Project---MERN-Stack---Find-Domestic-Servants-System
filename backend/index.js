
import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";

import serventsRoute from './routes/servantsRoute.js';
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';

const app = express();




app.use(
   cors({
       origin: 'http://localhost:3000',
        method:['GET' ,'POST', 'PUT' ,'DELETE'],
        allowedHeaders:['Content-Type'],
    })
);

//Middleware for passing request body
app.use(express.json());

    app.get('/',(request,response)=>{
        console.log(request)
        return response.status(234).send('Welcome To the MERN Project');
        });

    app.use('/servants', serventsRoute);
    app.use('/users',usersRoute);

    mongoose
    .connect(mongoDBURL)
    .then(() =>{
     console.log('App connected to database');
     app.listen(PORT, () => {
        console.log('App is listening to port :' + PORT);
    });
    })
    .catch((error)=>{
    console.log(error);
    });


  
    



   