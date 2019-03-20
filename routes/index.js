const express = require('express');
const router = express.Router();

//route for /member index page
router.get('/', (request, respond) => {
    respond.send("Welcome to the Member Only Page")
});
//route for /member/signin page
router.get('/signin', (request, respond) => {
    respond.send("Please sign in with your Member credentials")
});
//route for /member/contact/ page
router.get('/contact/:num/:name', (request, respond) => {
    respond.send(`Thanks ${request.params.name}! We will contact you shortly at ${parseInt(request.params.num)}`)
});
//exports module
module.exports = router;