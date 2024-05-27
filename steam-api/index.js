const playerService = require('./player-service');
const steamNews = require('./steam-news');
const steamUserStats = require('./steam-user-stats');
const steamUser = require('./steam-user');
const steamAPI = {
  ...playerService,
  ...steamNews,
  ...steamUserStats,
  ...steamUser,
};

const getURL = (path, query, key) => {
  const pathSegment = path.split('/').filter(Boolean);

  const URLData = {
    key,
    id: pathSegment[1],
    appid: pathSegment[2],
    query,
  };

  if (Object.hasOwn(steamAPI, pathSegment[0])) {
    return steamAPI[pathSegment[0]](URLData);
  } else {
    console.log('[Method not found]:');
  }
};

exports.getURL = getURL;
