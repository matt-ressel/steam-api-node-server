const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000; // port
const STEAM_API_KEY = process.env.STEAM_API_KEY; // your steam api key

// use express middleware for cross-domain requests
// set access for all or a specific domain
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // '*' = all  or http://your-domain.com
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/:method/:id/', (req, res) => {
  console.log('[req]:', req.params);

  // const url = createURL(req.params, apikey, req.query, req.originalUrl)
});

app.get('/:method/:id/:appid/', (req, res) => {
  console.log('[req]:', req);

  // const url = createURL(req.params, apikey, req.query, req.originalUrl)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
