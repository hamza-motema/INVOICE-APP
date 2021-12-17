import mongoose from 'mongoose';

//ici on definit des schema => qu'est ce qu'on peut accepeter dans la base de donnée 
const Schema = mongoose.Schema

export const UserSchema = new Schema({
    name: {
        type: String,
        required: 'Entrer un nom'
    },
    email: {
        type: String,
        required: 'Entrer un email'
    },
    street: {
        type: String,
        required: 'Entrer une rue'
    },
    city: {
        type: String,
        required: 'Entrer une ville'
    },
    postCode: {
        type: Number,
        required: 'Entrer un code postal'
    },
    country: {
        type: String,
        required: 'Entrer une ville'
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
});


