const steamAPI = require('../steam-api/index');
const STEAM_API_KEY = process.env.STEAM_API_KEY; // your steam api key

module.exports = async (req, res) => {
  const baseURL = req.headers['x-forwarded-proto'] + '://' + req.headers.host + '/';
  const reqURL = new URL(req.url, baseURL);

  if (req.method === 'GET') {
    // TODO: handle getURL error
    const url = steamAPI.getURL(reqURL.pathname, reqURL.search, STEAM_API_KEY);
    const response = await fetch(url);

    if (!response.ok) {
      res.status(500).json({ message: response.statusText });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);

    return;
  }
  res.status(405).json({ message: `${req.method} is not allowed for the request.` });
};
