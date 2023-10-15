import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8000;

import connectDB from './db/db.js';
import router from './routes/index.js';

app.use(cors());
app.use(bodyParser.json({express: true}));
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use('/',router);


app.listen(PORT, ()=>{
    console.log('listening on port ',PORT);
});