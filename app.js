const express = require('express');
const app = express();
//variable for index
var x = require('./routes/index');
//variable for index2
var y = require('./routes/index2');
//calls index and index2
app.use('/member', x);
app.use('/guest', y);

app.listen(8000, () => {
    console.log("Test Test")
});

