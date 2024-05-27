module.exports = {
  // http://localhost:3000/GetNewsForApp/292030/?count=10&maxlength=500
  GetNewsForApp: (data) => {
    const { id, query } = data;
    const getQuery = query.split('?').join('&');
    return `http://api.steampowered.com/ISteamNews/GetNewsForApp/v002/?appid=${id + getQuery}`;
  },
};
