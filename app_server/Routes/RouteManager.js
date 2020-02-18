var LoginRoute = require('./LoginRoute');
var HomeRoute = require('./HomeRoute');


module.exports = function(app){

    app.use('/login',LoginRoute);
    app.use('/',HomeRoute);

}