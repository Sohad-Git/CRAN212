import express from "express";

const app=express();

const logger = (req, res, next) =>{
    console.log(req.url);
    console.log(req.method);
    console.log(Date());
    next();
};

const newMiddleware = (req, res, next) => {
    console.log('new middleware');
    next();
}

app.use(logger);

app.get('/', newMiddleware ,logger, (req , res)=>{
   res.send('hello from simple server :)')

})
app.get('/about' , (req , res)=>{
    
    res.send('hello from about page')

})
app.get('/data' , (req , res)=>{
    
    res.send('hello from contact page')

})

app.listen(3000);