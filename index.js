const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'Sharukh khan', email: 'jhon@doe.com' },
    { id: 2, name: 'Jhon Doe', email: 'jhon@gmail.com' },
    { id: 3, name: 'Sakib khan', email: 'jhon@yahoo.com' },
    { id: 4, name: 'Ananta jalil', email: 'doe@jhon.com' },
    { id: 5, name: 'Mosharof', email: 'doe@hotmail.com' }
];

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello node');
});
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }
});
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(user => user.id === id);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});