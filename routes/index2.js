const express = require('express');
const router = express.Router();
//route for /guest index page
router.get('/', (request, respond) => {
    respond.send("Welcome to the Guest Support Page")
});
//route for /guest/register page
router.get('/register', (request, respond) => {
    respond.send("Thank You wanting to register for this site!")
});
//route for /guest/contact/ page
router.get('/contact/:num', (request, respond) => {
    respond.send(`We will contact you shortly at ${parseInt(request.params.num)} Guest`)
});

module.exports = router;