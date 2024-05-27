const http = require('http');
const steamAPI = require('../steam-api/index');
const querystring = require('node:querystring');
const PORT = process.env.PORT || 4000; // port
const STEAM_API_KEY = process.env.STEAM_API_KEY; // your steam api key

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

module.exports = (req, res) => {
  // console.log('[req]:', req);
  console.log('[req protocol]:', req.url);
  console.log('[req.protocol]:', req.headers);
  console.log('[req.headers["x-forwarded-proto"]"]:', req.headers['x-forwarded-proto']);
  console.log('[req url ]:', req.query);
  let result = querystring.stringify(req.query);
  console.log('[result]:', result);
  const baseURL = req.headers['x-forwarded-proto'] + '://' + req.headers.host + '/';
  const reqURL = new URL(req.url, baseURL);
  console.log('[reqUrl]:', reqURL);
  let who = 'anonymous';

  // if (request.body && request.body.who) {
  //   who = request.body.who;
  // } else if (request.query.who) {
  //   who = request.query.who;
  // } else if (request.cookies.who) {
  //   who = request.cookies.who;
  // }

  res.status(200).json(req.headers);
};
// export default function handler(request, response) {
//   const { name = 'World' } = request.query;
//   return response.send(`Hello ${name}!`);
// }

// export default http.createServer(async (req, res) => {
//   const baseURL = req.protocol + '://' + req.headers.host + '/';
//   const reqURL = new URL(req.url, baseURL);

//   if (req.method === 'GET') {
//     // TODO: handle getURL error
//     const url = steamAPI.getURL(reqURL.pathname, reqURL.search, STEAM_API_KEY);
//     const response = await fetch(url);

//     if (!response.ok) {
//       res.writeHead(500, headers);
//       res.end(JSON.stringify({ message: response.statusText }));
//       return;
//     }

//     const data = await response.json();

//     res.writeHead(200, headers);
//     res.end(JSON.stringify(data));
//     return;
//   }

//   res.writeHead(405, headers);
//   res.end(`${req.method} is not allowed for the request.`);
// });

// server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
