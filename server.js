'use strict';

'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./api/db');

const app = express();

let nextId = 4;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/db', (req, res) => {
    res.send(db);
});

app.post('/api/db', (req, res) => {
    const item = {
        id: nextId++,
        value: req.body.value,
        link: 0
    };

    db.push(item);

    res.send(db);
});

app.put('/api/db/:id', (req, res) => {
    const item = db.find(item => item.id == req.params.id);

    if (!item) return res.sendStatus(404);

    item.value = req.body.value || todo.value;

    res.json(item);
});

app.patch('/api/db/:id', (req, res) => {
    const item = db.find(item => item.id == req.params.id);

    if (!item) return res.sendStatus(404);

    item.link = !todo.link;

    res.json(item);
});

app.delete('/api/db/:id', (req, res) => {
    const index = db.findIndex(item => item.id == req.params.id);

    if (index === -1) return res.sendStatus(404);

    db.splice(index, 1);

    res.sendStatus(204);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));
