// 
require('dotenv').config();
let express = require('express');
let app = express();

// ------------------------------------------------
// app.use('/test', function(req, res){
//     res.send('this is the test endpoint on the server')
// })
// -------------------------------------------------------
let sequelize = require('./db');
let user = require('./controllers/usercontroller');
const plant = require('./controllers/plantcontroller');
// ------------------------------------------------------
sequelize.sync();
// sequelize.sync({force:true});
app.use(express.json());
app.use(require('./middleware/headers'));
app.use('/plant', plant);
app.use('/user', user);

// ---------------------------------------------------
app.listen(3002, function(){
    console.log('app is listening on port 3002');
})
