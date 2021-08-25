const express = require('express');
const mongoose = require('mongoose');

const router = require('./Router/index');

const app = express();

const host = 'localhost';
const port = '2030';
const dbUrl = 'mongodb://127.0.0.1:27017/zomato_17';
const serverDBURL = "mongodb+srv://zomato_user:9832823762@cluster0.u93w8.mongodb.net/zomato?retryWrites=true&w=majority";

app.use('/', router);

mongoose.connect(serverDBURL, { useNewUrlParser: true })
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server is Running at ${host}:${port}`)
        });
    })
    .catch(err => console.log(err));