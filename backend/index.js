import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import vehiclesRoute from './routes/vehiclesRoute.js';
import usersRoute from './routes/usersRoute.js';
import adminusersRoute from './routes/adminusersRoute.js';




const app = express();


app.use(express.json());

app.use(cors());



app.get('/', (request, response)=>{
        console.log(request)
        return response.status(200).send('welcome to vehicle store');
});

app.use('/vehicles',vehiclesRoute);
app.use('/users', usersRoute);
app.use('/admins',adminusersRoute);


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port :${PORT}`);
    })
})
.catch((error)=>{ 
    console.log(error);
})

