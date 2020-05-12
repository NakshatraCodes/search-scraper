const cheerio = require('cheerio');
const axios = require('axios');

async function getHTML(){
	const {data: html} = await axios.get('https://www.google.com/search?q=automate the boring stuff with python');
	return html;
}

async function loadCheerio(html){
	const $ = cheerio.load(html);
	const span = $.html();
	console.log(span);
}

loadCheerio(getHTML());