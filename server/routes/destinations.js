const express = require("express");
const router = express.Router();
const Destinations = require("../models/destinationModel");


router.get("/",async (req,res)=>{
    try{
        const query = req.query.q; // the get request will be made at http://localhost:5000/api/search?q=${Paris}
        console.log(query);
        const dest = await Destinations.find({name:{$regex:query, $options:"i"}}).limit(5);  
        console.log(dest);
        res.json(dest); //send the retrieved data from the db in JSON format
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server error"});
    }
})

module.exports = router;