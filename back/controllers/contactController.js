const contact = require('../models/contactModel');
//const mongoose = require('mongoose');

/*const getData = async (req, res) => {
    const datas = await contact.find({}).sort({ createdAt: -1});
    res.status(200).json(datas);
}

const getSingleData = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such item'})
    }
    const item = await contact.findById(id);

    if(!item) {
        res.status(400).json({error: 'No such item'})
    } else {
        res.status(200).json(item);
    }
}*/

const createData = async (req, res) => {
    const { fullName, email, shortMessage } = req.body;

    try {
        const item = await contact.create({fullName, email, shortMessage});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

/*const deleteData = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such item'})
    }

    const item = await contact.findByIdAndDelete(id);
    if(!item) {
        res.status(400).json({error: 'No such item'})
    } else {
        res.status(200).json(item);
    }
}

const updateData = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such item'})
    }

    const item = await contact.findByIdAndUpdate(id, {...req.body});
    if(!item) {
        res.status(400).json({error: 'No such item'})
    } else {
        res.status(200).json(item);
    }
}

module.exports = {
    getData,
    getSingleData,
    createData,
    deleteData,
    updateData
}*/

module.exports = {
    createData
}