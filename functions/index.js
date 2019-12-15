const functions = require('firebase-functions');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('app listening at 3000');
});