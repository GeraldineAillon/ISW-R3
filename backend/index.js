const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();


const espaciocomRoutes = require('./routes/espaciocomRoute');
const reservaespacioRoutes = require('./routes/reservaespacioRoute');
const fileRoutes = require('./routes/fileRoute');
const usuarioRoutes = require('./routes/usuarioRoutes');
const sancionRoutes = require('./routes/sancionRoutes');



app.use(cors());
app.use(express.json());
app.options('*',cors());


app.use('/api', espaciocomRoutes);
app.use('/api', reservaespacioRoutes);
app.use('/api', fileRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', sancionRoutes);



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Connected to Database');
    }
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})
