const express = require('express');

const app = express();
const port = 3000;
version = '1.0.0'

app.get('/',(req,res) => {
    res.send(`<h1> if you can see this then success </h1> <h2> version : ${version} </h2>`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
