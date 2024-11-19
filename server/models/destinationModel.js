const mongoose = require("mongoose");

// Ensure that the environment variables are loaded correctly
const dotenv = require('dotenv');
dotenv.config({ path: './key.env' });

const destinationsDB = mongoose.createConnection(process.env.DESTINATIONS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema
const destSchema = new mongoose.Schema({
    name: String,
    country: String,
    description: String
});

// Create the model using the `destinationsDB` connection
const Destination = destinationsDB.model("Destination", destSchema, "all_destinations");

module.exports = Destination;