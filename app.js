const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

//Midlewares
app.use("/post", ()=>{
    console.log("We are using a midleware");
});

//Import Routes
const postRoute = require("./routes/posts")

//ROUTES
app.use('/posts', postRoute)

app.get("/", (req, res) => {
  res.send("This is my new post");
});

// Connect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//App listening port
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})