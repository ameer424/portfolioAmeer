const http = require('http');
const fs = require('fs');
const nodeMailer = require('nodemailer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.get('/', async (req, res) =>{
    fs.readFile("./public/index.html", function (error, pgResp) {
        res.writeHead(200);
        res.write(pgResp);
        res.end();
    })
});

app.get('/en', async (req, res) =>{
  fs.readFile("./public/en.html", function (error, pgResp) {
      res.writeHead(200);
      res.write(pgResp);
      res.end();
  })
});





app.listen(PORT, () => {
  console.log(`Server running`);
});