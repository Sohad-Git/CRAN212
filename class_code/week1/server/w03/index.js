import express from "express";

const app = express();
const port=process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.get("/", (req, res)=>{
    res.send("hello from the server");
})

app.delete("/",(req, res)=>{
    res.send("This is a DELETE request");
});

app.post("/",(req, res)=>{
    res.send("This is a POST request");
});

app.put("/",(req, res)=>{
    res.send("This is a PUT request");
});

/* */ 
app.get("/watch",(req, res)=>{
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("This is the watch endpoint");
});

app.get("/params/:itemID",(req, res)=>{
    res.send("This is the params endpoint");
});