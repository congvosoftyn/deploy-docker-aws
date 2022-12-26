const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res,next)=>{
    res.send("Hello World!")
})

app.use((req,res,next)=>{
    const error = new Error("Not Found!");
    next(error)
})

app.use((error, req, res,next)=>{
    res.status(error.status || 500).json({
        message: error.message
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})