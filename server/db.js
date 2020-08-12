const Sequelize = require('sequelize');

// DB Local
// const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// DB Deploy
const sequelize = new Sequelize(process.env.DATABASE_URL,{
   dialect:'postgres'
});
// -----------------------------------------------------

sequelize.authenticate().then(
    function(){
        console.log('connected through plantify-server postgres database');
    },
    function(err){
        console.log(err)
    }
);

module.exports = sequelize;