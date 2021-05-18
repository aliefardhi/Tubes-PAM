const exp = require('express');
const app = exp();
const bp = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { error, success } = require('consola');
const mongoUri = "mongodb+srv://alief:admin@cluster0.pldoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send("Welcome to node js")
})
app.listen(1000,()=>{
    console.log("Server running")
})

require('./Schema')

const Schema = mongoose.model("tubes")

mongoose.connect(mongoUri, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on("connected", ()=>{
    success({
        message: 'Connected to mongo',
        badge: true
    })
})

mongoose.connection.on("error", (err)=> {
    console.log("error to connected mongo", err)
})

app.listen(7070, ()=>{
    success({
        message: 'Server started',
        badge: true
    })
})

app.use(bp.json());

app.post('/api/v1/prak/send-data', (req, res) => {
    const noteModel = new Schema({
        title:req.body.title,
        content:req.body.content,
    })
    noteModel.save()
    .then((data)=>{
        res.status(201).json({
            success: true,
            message: "Berhasil menyimpan data",
            data: data
            })
    }).catch((err)=>{
        res.status(400).json({
            success: false,
            message: err
        })
    })
})


app.get('/api/v1/prak', (req, res) => {
    Schema.find({}).then(data=>{
        res.status(200).json({
            success: true,
            message: "Semua Data",
            data: data
        })
    }).catch(err=>{
        res.status(400).json({
            success: false,
            message: err,
        })
    })
})


app.delete('/api/v1/prak/delete/:id',(req,res)=>{
        Schema.findByIdAndRemove(req.params.id)
        .then(data=>{
            res.status(200).json({
                success: true,
                message: "Berhasil menghapus data",
                data: data
                })
        })
        .catch(err=>{
            res.status(400).json({
                success: false,
                message: err
             })
        })
    })
app.put('/api/v1/prak/update/:id', (req,res)=>{
    Schema.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        content:req.body.content,
    }) . then (data => {
        res.status(200).json({
            success: true,
            message: "Berhasil mengubah data",
            data : data
        })
    })
    .catch(err=>{
        res.status(400).json({
            success : false,
            message : err
        })
    })
})
