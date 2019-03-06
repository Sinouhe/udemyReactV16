const Authentification = require("./controllers/Authentification")
require('./services/passport')
const passport = require('passport')
const requireToken = passport.authenticate('jwt', {session: false})

module.exports = function (expressServer) {
    console.log('ok')
    expressServer.post("/signup", Authentification.signup)
    .get('/ressourceSecrete',requireToken,function(req,res) {
        res.send({ok: 42})
    })

}