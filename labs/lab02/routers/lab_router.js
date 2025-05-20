import express from "express";

const router = express.Router();

router.get("/name", (req, res) => {
    res.send("Sohad");
});

router.get("/greet", (req, res) => {
    res.send("Hello form the greet route");
});

router.get("/add/:x/:y", (req, res) => {
    console.log(req.params.x);
    let left = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.send(`${x} + ${y} = ${x + y}`);
})

router.get(`/calculate/:x/:y/:operation`, (req, res) => {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    let operation = req.params.operation;

    if(operation === "+") {
        res.send(`${x} + ${y} = ${x + y}`);
    }
    else if(operation === "-") {
        res.send(`${x} - ${y} = ${x - y}`);
    }
    else if(operation === "*") {
        res.send(`${x} * ${y} = ${x * y}`);
    }
    else if(operation === "|") {
        if(y === 0) {
            res.send("Cannot divide by zero");
            return;
        }
        else{
            res.send(`${x} / ${y} = ${x / y}`);
        }s   
    }
})

export default router;