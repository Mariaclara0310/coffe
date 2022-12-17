const express = require('express');
const path = require('path');

const app = express();

const mainRouters = require('./routers/mainRouters')

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.use('/', mainRouters);


app.listen(3000, () => console.log("Servidor up"));


 app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, './views/index.ejs'));
     
    
 });
 