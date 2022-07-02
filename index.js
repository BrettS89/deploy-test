require('dotenv').config();
const express = require('express');
const app = express();

console.log('inn');

app.get('/api', (req, res) => {
	res.json({ message: process.env.HELLOTHERE });
})

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	console.log(process.env.HELLOTHERE);
});
