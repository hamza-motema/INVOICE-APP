import {
    addNewInvoice,
    getAllInvoices,
    getInvoicesWithID,
    updateInvoice,
    deleteInvoice
} from '../controllers/invoceController'

import {
    addNewItem,
    getAllItems,
    getItemsWithID,
    updateItem,
    deleteItem
} from '../controllers/itemController'

import {
    addNewUser,
    getAllUsers,
    getUsersWithID,
    updateUser,
    deleteUser
} from '../controllers/userController'

const routes = (app) => {
    // ----------------INVOICE
    app.route('/invoice')
        .get((req, res, next) => {
            //middleware
            console.log('Request provient de : ' + req.originalUrl);
            console.log('Request de type : ' + req.method);
            next();
        }, getAllInvoices)
        .post(addNewInvoice);

    app.route('/invoice/:invoiceID')
        .get(getInvoicesWithID)
        .put(updateInvoice)
        .delete(deleteInvoice)

    // ----------------ITEM
    app.route('/item')
        .get(getAllItems)
        .post(addNewItem);

    app.route('/item/:itemID')
        .get(getItemsWithID)
        .put(updateItem)
        .delete(deleteItem)

    // ----------------USER
    app.route('/user')
        .get(getAllUsers)
        .post(addNewUser);

    app.route('/user/:userID')
        .get(getUsersWithID)
        .put(updateUser)
        .delete(deleteUser)
}

export default routes;