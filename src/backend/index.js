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

routes(app);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send('Serveur node et express sur le port ' + PORT)
);

app.listen(PORT, () =>
    console.log('Le serveur est sur le port ' + PORT)
) 