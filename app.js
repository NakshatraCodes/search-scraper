const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


var scraper = require('google-search-scraper');
 
var options = {
  query: 'nodejs',
  limit: 10
};
 
scraper.search(options, function(err, url, meta) {
  // This is called for each result
  if(err) throw err;
  console.log(url);
  console.log(meta.title);
  console.log(meta.meta);
  console.log(meta.desc)
});


// Routes

const PORT = 3000;

app.get("/", function(req, res){
    res.render('index');
});

app.listen(PORT, ()=>{
	console.log(`Server is listening at PORT:${PORT}`);
});

// Package Functions

