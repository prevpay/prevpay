const functions = require('firebase-functions');

const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const app = express();
app.disable("x-powered-by");

app.get("/users", async (req, res) => {
   res.status(200).send(`You requested user with UID`);
});

exports.api = functions.https.onRequest(app);