import mongoose from 'mongoose';
import { InvoiceSchema } from '../models/invoceModel'

const Invoice = mongoose.model('Invoice', InvoiceSchema);

export const addNewInvoice = (req, res) => {
    let newInvoice = new Invoice(req.body);
    newInvoice.save((err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json(invoice);
        }
    });
};

export const getAllInvoices = (req, res) => {
    Invoice.find({}, (err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json(invoice);
        }
    });
};

export const getInvoicesWithID = (req, res) => {
    Invoice.findById(req.params.invoiceID, (err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json(invoice);
        }
    });
};

export const updateInvoice = (req, res) => {
    Invoice.findByIdAndUpdate({ _id: req.params.invoiceID }, req.body, { new: true }, (err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json(invoice);
        }
    });
};

export const deleteInvoice = (req, res) => {
    Invoice.remove({ _id: req.params.invoiceID }, (err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Le invoice a été effacé avec succès' });
        }
    });
};

export const deleteAllInvoice = (req, res) => {
    Invoice.remove({}, (err, invoice) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Toutes les factures on ete supprimées' });
        }
    });
};