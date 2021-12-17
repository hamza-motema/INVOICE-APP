import mongoose from 'mongoose';

//ici on definit des schema => qu'est ce qu'on peut accepeter dans la base de donnée 
const Schema = mongoose.Schema

export const InvoiceSchema = new Schema({
    description: {
        type: String,
        //required: 'Entrer une description'
    },
    paymentTerms: {
        type: Number,
        //required: 'Entrer le nombre de jours'
    },
    status: {
        type: Boolean,
        //required: 'Entrer le status'
    },
    total: {
        type: Number,
    },
    create_date: {
        type: Date,
        default: Date.now()
    },
    itemList: {
        type: Array,
        //required: 'Entrer la liste des items'
    },
    paymentDue: {
        type: Date,
        //required: 'Entrer la date du paiement'
    },
});


