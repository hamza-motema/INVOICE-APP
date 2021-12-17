import express from 'express';
import routes from './routes/routes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express()
const PORT = 3000;

//connection mongoose 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/invoce-app', {
    useNewUrlParser: true
});

//bodyparse
//pour lire du json de mongodb 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
routes(app);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send('Serveur node et express sur le port ' + PORT)
);

app.listen(PORT, () =>
    console.log('Le serveur est sur le port ' + PORT)
) 