const http = require('http');
const app = require("express")();
const fs = require('fs');
const url = require('url');




const port = process.env.PORT ? process.env.PORT : 3000;


const server = http.createServer((req, res) => {

	const fs = require('fs');

	const folderName = 'test';

	try {
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
		}
	} catch (err) {
		console.error(err);
	}



	const content = queryObject

	fs.writeFile('./test/mytext.txt', content, (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});





	
    var url1 = req.url;

    
	if (url1.includes("/?")) {
		
    
		res.write('<h1>H1 TEXT</h1>');
		 const queryObject = url.parse(req.url, true).query;
			console.log(queryObject);
			res.writeHead(200, { 'Content-Type': 'text/html' });

			
		res.end();

		
	} else if (url1 === '/Home') {
        fs.readFile('index.html', 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			res.write(data)
			res.end();
		});
        
	} else {
		res.statusCode = 401
	}



});



server.listen(port, () =>  {
    console.log("Le serveur marche sur le port" +port)
})