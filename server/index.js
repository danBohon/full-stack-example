const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const couchesController = require('./couchesController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.log('error with massive', error);
})

app.get('/api/controller', couchesController.getCouches);
app.post('/api/controller', couchesController.postCouches);
// app.delete('/api/controller', couchesController.deleteCouches);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🦍 🦖`);
})