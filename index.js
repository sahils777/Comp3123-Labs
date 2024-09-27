const express = require('express');
const app = express();
const SERVER_PORT = 3002;
const DEFAULT_FIRSTNAME = "Pritesh";
const DEFAULT_LASTNAME = "Patel";
const firstname = "John";
const lastname = "Doe";

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/hello', (req, res) => {
    res.status(200);
    res.send('Hello Express JS');
});

app.get('/user', (req, res) => {
    res.status(200);
    const firstname = req.query.firstname || DEFAULT_FIRSTNAME;
    const lastname = req.query.lastname || DEFAULT_LASTNAME;
    res.json({ firstname, lastname });
});

app.post('/user/:firstname/:lastname', (req, res) => {
    res.status(200)
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
