const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const User = require('./models/users');
require('dotenv').config();

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const adminRoutes = require('./routes/adminRoutes');
const errorController = require('./controllers/errorController');
const errorHandler = require('./util/errorHandler');


app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.get('/500', errorController.get500);
app.use(errorController.get404);
app.use((error, req, res, next) => {
    res.redirect('/500');
});


mongoose.connect('mongodb+srv://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@cluster0.3rplv.mongodb.net/share-energy?retryWrites=true&w=majority')
.then(async () => {
    let arquivoClientes = fs.readFileSync(
        path.join(__dirname, 'dadosClientes.json')
    )
    let dadosClientes = JSON.parse(arquivoClientes);
    const user = await User.findOne();
        if(!user){
            for(cliente of dadosClientes){
                const newUser = await new User({
                    numeroCliente: cliente.numeroCliente,
                    nomeCliente: cliente.nomeCliente,
                    usinas: cliente.usinas,
                });
                console.log(newUser);
                await newUser.save();
            }
        }

})
.then(() => {
    app.listen(process.env.PORT || 3000);
})


