// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');//cors allows u to process requests coming from a different port/origin (client react app) than the port where the server is running
const dotenv = require('dotenv');// a module to load environment variables from a .env file
const authRoutes = require('./routes/auth');
const searchRoute = require('./routes/destinations');


dotenv.config({ path: './key.env' });// load environment variables from key.env into process.env making it accessible throughout the app    
const app = express();

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('DESTINATIONS_URI:', process.env.DESTINATIONS_URI);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

app.use(cors());// enables CORS which allows the server to accept requests from different origins
app.use(express.json());// takes the JSON data from the request and converts(parses) it into a JS object

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

console.log('Destinations URI:', process.env.DESTINATIONS_URI);

const destinationsDB = mongoose.createConnection(process.env.DESTINATIONS_URI);

destinationsDB.on('connected', () => {
    console.log('Connected to Destinations DB');
});

destinationsDB.on('error', (err) => {
    console.log('Error connecting to Destinations DB:', err);
});

app.use('/api/auth', authRoutes);

app.use('/api/search',searchRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
