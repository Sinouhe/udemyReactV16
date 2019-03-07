const Authentification = require("./controllers/Authentification")
require('./services/passport')
const passport = require('passport')
const requireToken = passport.authenticate('jwt', {session: false})
const requireValideCredential = passport.authenticate("local", {session : false})

module.exports = function (expressServer) {
    expressServer
    .post("/signup", Authentification.signup)
    .get('/ressourceSecrete',requireToken,function(req,res) {
        res.send({ok: 42})
    })
    .post("/signin",requireValideCredential,Authentification.signin)

}