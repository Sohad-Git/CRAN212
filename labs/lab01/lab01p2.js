import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Hello World!");
    }
    else if(req.url === "/contact") {
        const date =fs.readFile("./html/contact.html")
        res.end(data);
    }
    else if(req.url === "/about") {
        const date =fs.readFile("./html/about.html")
        res.end(data);
    }
    else if(req.url === "/methods") {
        if(req.method === "GET") {
            res.end("GET request");
        }
        else if(req.method === "POST") {
            res.end("POST request");
        }
        else if(req.method === "PUT") {
            res.end("PUT request");
        }
    }
    else {
        fs.readFile("./html/404.html", (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data || "404 - Page Not Found");
        });
    }
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
});