const express = require("express");

const app = express();

//Midlewares
app.use('/post', ()=>{
    console.log("We are using a midleware")
})

//ROUTES
app.get('/',(req, res)=>{
    res.send("Hello fellow Nigerians")
})

app.get("/post", (req, res) => {
  res.send("This is my new post");
});
//App listening port

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})