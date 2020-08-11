const Sequelize = require('sequelize');
const sequelize = new Sequelize('Plantify', 'postgres', 'Letmein8762',{
    host:'localhost',
    dialect:'postgres'
});
// -----------------------------------------------------

sequelize.authenticate().then(
    function(){
        console.log('connected through Plantify postgres database');
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;