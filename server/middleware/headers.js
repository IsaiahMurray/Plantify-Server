module.exports = (req, res, next) => {

    res.header(`access-control-allow-origin`, `*`); // * means any origin
    res.header(`access-control-allow-methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    res.header(`access-control-allow-headers`, `Origin, X-Requested-Width, Content-Type, Accept, Authorization`);

    next();
}