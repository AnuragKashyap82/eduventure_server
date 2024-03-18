const express = require('express');
const auth = require('../middlewares/auth');
const User = require('../models/user');
const ColorModel = require('../models/colorModel');;
const colorRouter = express.Router();

//Add Color
colorRouter.post("/api/addColor", auth, async function(req, res) {
    try {
        const { color } = req.body;

        let colorModel = new ColorModel({
            color
        });

        colorModel = await colorModel.save();
        res.json({ "status": true, colorModel });
    } catch (error) {
        res.status(500).json({ "status": false, msg: error.message });
    }
});


 ///Get All Color
 colorRouter.get('/api/getAllColor', auth, async (req, res)=> {
    try {
        const color = await ColorModel.find();
        res.json({"status": true, color});
    } catch (error) {
        res.status(500).json({"status": false,error: error.message});
    }
});

 

 module.exports = colorRouter;