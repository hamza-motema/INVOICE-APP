import mongoose from 'mongoose';
import { ItemSchema } from '../models/itemModel'

const Item = mongoose.model('Item', ItemSchema);

export const addNewItem = (req, res) => {
    let newItem = new Item(req.body);
    newItem.save((err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.json(item);
        }
    });
};

export const getAllItems = (req, res) => {
    Item.find({}, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.json(item);
        }
    });
};

export const getItemsWithID = (req, res) => {
    Item.findById(req.params.itemID, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.json(item);
        }
    });
};

export const updateItem = (req, res) => {
    Item.findByIdAndUpdate({ _id: req.params.itemID }, req.body, { new: true }, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.json(item);
        }
    });
};

export const deleteItem = (req, res) => {
    Item.remove({ _id: req.params.itemID }, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Le item a été effacé avec succès' });
        }
    });
};