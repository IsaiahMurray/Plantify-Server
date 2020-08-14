module.exports = (req, res, next) => {

    res.header('access-control-allow-origin', '*'); // * means any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');

    next();
}