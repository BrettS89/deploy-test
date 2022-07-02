require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
	res.json({ message: 'success' });
})

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	console.log(process.env.HELLOTHERE);
});
