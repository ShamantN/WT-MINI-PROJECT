// server/models/User.js
const mongoose = require('mongoose');// mongoose is a lib that helps interact with the mongoDB database in a more structured manner

const userSchema = new mongoose.Schema({ //.schema is used to define a structure of a document that will be stored in the db and creates a new schema for the user
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
module.exports = mongoose.model('User', userSchema);//.model creates a model called 'User' based on the schema defined above. This 'User' model will be used to
                                                    // interact with the "users" collection in the database
                                                //the model is a class that can be used to interact with the db by creating instances/objects of the "model"class