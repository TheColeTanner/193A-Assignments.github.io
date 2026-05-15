'use strict';
const express = require('express');
const app = express();


// define all endpoints here

app.get('/hello', function (req, res) {
  res.type('text');
  res.send('Hello World!');
});

app.get('/math/circle/:r', function (req, res) {
	if (req.params['r']){
		const r = parseFloat(req.params.r);
		const area = Math.PI * r * r;
		const circumference = Math.PI * 2 * r;
		res.type('JSON');
		res.json({ area: area, circumference: circumference });
	}else{
		res.type('text').status(400).send("Error, Bad Request!");
	}

});

app.get('/hello/name', function (req, res) {
    const first = req.query.first;
    const last = req.query.last;
	
    if (first && last) {
        res.type('text').send('Hello ' + first + ' ' + last);
    } else if (first) {
        res.type('text').status(400).send('Missing Required GET parameters: last');
    } else if (last) {
        res.type('text').status(400).send('Missing Required GET parameters: first');
    } else {
        res.type('text').status(400).send('Missing Required GET parameters: first, last');
    }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
