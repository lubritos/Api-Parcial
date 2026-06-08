global.crypto = require('crypto');
const express = require('express');
const { connectDB } = require('./config/db');
// Routest
const Authroute = require('./routes/auth.routes');
const Productroute = require('./routes/products.routes');
const Shiftroute = require('./routes/shift.routes');
const Clientroute = require('./routes/client.routes');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

connectDB(); 

app.use('/', Clientroute);

app.use("/api", Authroute);
app.use('/api/product', Productroute);
app.use('/api/shift', Shiftroute);

app.listen(3000, () => {
    console.log('Esta escuchando en el puerto 3000!');
});