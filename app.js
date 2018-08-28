// Require the express module
const express = require('express');
// Create a new web server
const app = express();
const port = process.env.PORT || 3000;
// Tell the web server to serve files
// from the www folder
app.use(express.static(__dirname + '/www'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});
// Start the web server on port 3000
app.listen(port, () => console.log('Listening on port 3000'));
