const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello worldikhjihk');
});
app.post('/', (req, res) => {
    res.send('Got  request');
});

app.put('/user', (req, res) => {
    res.send('got a put request at /user');
});

app.delete('/user-del', (req, res) => {
    res.send('got a delete request at /user');
});
app.listen(port, () => {
    console.log(`app listening at http localhost${port}`);
});
const data = [
    { name: 'igor', age: 10 },
    { name: 'geoge', age: 7 },
    { name: 'vania', age: 12 },
    { name: 'valera', age: 5 },
    { name: 'billy', age: 3 }
];

app.get('/get-user-info', function (req, res) {
    console.log('this path - /users');
    console.log(req.query.age);
    res.status(200);
    res.send(data.filter(item => item.age > req.query.age));
});