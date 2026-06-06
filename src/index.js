const express = require('express');

// Routest
const Authroute = require('./routes/auth.routes');
const Productroute = require('./routes/products.routes');
const Shiftroute = require('./routes/shift.routes');
const Clientroute = require('./routes/client.routes');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Clientroute);

app.use("/api", Authroute);
app.use('/api/product', Productroute);
app.use('/api/shift', Shiftroute);

app.listen(3000, () => {
    console.log('Esta escuchando en el puerto 3000!');
});