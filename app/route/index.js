import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import cons from 'consolidate';
import { fileURLToPath } from 'url';
import require from 'requirejs'

const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;

//login page
app.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
app.get('/register', (req,res)=>{
    res.render('register');
})

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))