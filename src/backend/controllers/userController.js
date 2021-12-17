import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel'

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const getAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const getUsersWithID = (req, res) => {
    User.findById(req.params.userID, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.userID }, req.body, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userID }, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Le user a été effacé avec succès' });
        }
    });
};