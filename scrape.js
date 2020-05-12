const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.google.com/search?q=automate')
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html); 
           	$('div#main div#cnt div.mw div#rcnt div.col div#centre_col div.med div#search div div div.g').each((i, elem)=>{
           		console.log(elem);
           	});
    	}
}, (error) => console.log(err) );


// getHTML();