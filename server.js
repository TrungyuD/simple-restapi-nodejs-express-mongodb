const express = require('express');
const mongoose = require('mongoose')
const tasksRoutes = require('./routes/tasks')

const app = express();

app.use(express.json());
app.use('/api/tasks', tasksRoutes);
// mongodb: p0MUX3QEXdxWGL1F
//db : mongodb+srv://duy:<password>@cluster0.48qgk.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    'mongodb+srv://duy:p0MUX3QEXdxWGL1F@cluster0.48qgk.mongodb.net/tasks',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(5000, ()=>{console.log('API running at: http://localhost:5000')})
}).catch((err)=>{
    console.log(err);
})

