const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));




// Routes

const PORT = 3000;

app.get("/", function(req, res){
    res.render('index');
});

app.listen(PORT, ()=>{
	console.log(`Server is listening at PORT:${PORT}`);
});

// Package Functions
