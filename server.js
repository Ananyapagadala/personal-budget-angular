const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));
const data = require('./data.json');

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};


app.get('/hello', (req, res) =>{
    res.send('Hello World!');
});

app.get('/budget', (req, res) =>{
    res.json(budget);
    res.json(data);
});

app.listen(port, () =>{
    console.log(`Example applistening at http://localhost:${port}`)
});