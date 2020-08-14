module.exports = (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*'); // * means any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');

    next();
}