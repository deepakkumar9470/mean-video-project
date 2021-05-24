const express = require('express');
const app = express()
const path = require('path');
const mongoose = require('mongoose')
const url = 'YOUR MONGO_DB URI'

mongoose.connect(url, {useUnifiedTopology: true,useNewUrlParser : true, useCreateIndex: true}).then(() =>console.log('Mongodb connection successful..'))
.catch((err)=>console.log('error', err));

const apiRoute = require('./server/routes/api')
const PORT = 5000

app.use(express.static(path.join(__dirname +'/dist')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoute)


app.get('/', (req, res)=>{
    res.send('MEAN Stack App')
})

app.listen(PORT, (req, res)=>{
    console.log(`Server started at PORT ${PORT}`);
})