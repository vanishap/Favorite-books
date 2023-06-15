const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bookSchema = require('./schema/Book')

app.use(cors());
app.use(express.json());
app.use((req,res, next) =>{
    next();
});

app.get('/get-all-books', (req, res)=>{
   bookSchema.find({}).then((a)=>{
    res.send(a)
   }).catch(err =>console.error(err))
});

app.post('/add-book', (req, res) => {  
   console.log(req.body);
   const {title,author} = req.body;
//    if(!title  || !author){
//     res.send({message:'Book not added successfully. Missing params'});
//    }else {
//     res.send({message:'Book added successfully'})
//    }
bookSchema.create({title,author}).then(()=>{
    res.send({message:'Book added successfully'})
   }).catch(err => console.error(err)) 
});
app.put('/update-book', (req, res)=>{
   const books= []
    res.send(books);
});

mongoose.connect('mongodb+srv://admin:admin@mydb.v9daqz5.mongodb.net/test', {})
    .then(()=>{
        console.log('connected to db')
    }).catch(err=>{
        console.error("failed to connect")
    });

app.listen(3001, (req, res)=>{
    console.log('connected to app');
});