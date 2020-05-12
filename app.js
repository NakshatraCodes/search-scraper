const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const PORT = 3000;

app.get("/", function(req, res){
    res.render('index');
});

app.listen(PORT, ()=>{
	console.log(`Server is listening at PORT:${PORT}`);
});