const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    console.log('in / 31');
    res.send({message:'success2'})
});

app.listen(80, ()=>{
    console.log('server started.')
})