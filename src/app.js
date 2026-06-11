global.crypto = require('crypto');
const express = require('express');
const { connectDB } = require('./config/db');
// Routest
const Authroute = require('./routes/auth.routes');
const Profesionalroute = require('./routes/profesional.routes');
const Turnoroute = require('./routes/turno.routes');
const Clientroute = require('./routes/client.routes');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

connectDB(); 

app.use('/', Clientroute);

app.use("/api", Authroute);
app.use('/api/profesional', Profesionalroute);
app.use('/api/turno', Turnoroute);

module.exports = app;