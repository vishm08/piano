const salesforceToPiano = require('./salesforceToPiano');

const constructorMethod = (app) => {
    app.use('/salesforceToPiano', salesforceToPiano);

    app.use('*', (req, res) => {
        res.status(404).json({error : "Not Found!"});
    });
};

module.exports = constructorMethod;