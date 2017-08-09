const path = require('path');
const express = require('express');

const app = express();

app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
    console.log(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
