import mongoose from 'mongoose';

//ici on definit des schema => qu'est ce qu'on peut accepeter dans la base de donnée 
const Schema = mongoose.Schema

export const ItemSchema = new Schema({
    name: {
        type: String,
        required: 'Entrer le nom du produit'
    },
    price: {
        type: Number,
        required: 'Entrer le prix du produit'
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
});


