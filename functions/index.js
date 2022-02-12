const functions = require("firebase-functions");
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!");
  response.send("Hello from Firebase!");
});
