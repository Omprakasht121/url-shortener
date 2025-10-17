import express from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middleware/404.js';
import { connectToDB } from './src/utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { urlRoutes } from './src/api/v1/routes/url-routes.js';

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/',userRoutes);
app.use('/', urlRoutes);
app.use(error404);

const promise = connectToDB();
promise.then(result => {
    console.log('DatabaseConnection Successfully');
    const server = app.listen(5000,err => {
    if(err){
        console.log('server crashed', err)
    }
    else{
        console.log('server is up and running ',server.address().port);
    }
})
}).catch(err => {
    console.log('error while connecting to db', err);
})
