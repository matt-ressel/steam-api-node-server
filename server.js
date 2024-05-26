const http = require('http');
const steamAPI = require('./api/index');

const PORT = process.env.PORT || 3000; // port
const STEAM_API_KEY = process.env.STEAM_API_KEY; // your steam api key

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

const server = http.createServer(async (req, res) => {
  const baseURL = req.protocol + '://' + req.headers.host + '/';
  const reqURL = new URL(req.url, baseURL);

  if (req.method === 'GET') {
    // TODO: handle getURL error
    const url = steamAPI.getURL(reqURL.pathname, reqURL.search, STEAM_API_KEY);
    const response = await fetch(url);

    if (!response.ok) {
      res.writeHead(500, headers);
      res.end(JSON.stringify({ message: response.statusText }));
      return;
    }

    const data = await response.json();

    res.writeHead(200, headers);
    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
});

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
