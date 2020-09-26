const express = require("express");

const app = express();

//ROUTES
app.get('/',(req, res)=>{
    res.send("Hello fellow Nigerians")
})
//App listening port

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})