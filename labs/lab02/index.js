import express from "express";
import lab_router from "./routers/lab_router.js";

const app=express();
const port=process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use("/lab", lab_router);
