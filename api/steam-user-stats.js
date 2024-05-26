module.exports = {
  // http://localhost:3000/GetSchemaForGame/292030
  GetSchemaForGame: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v002/?key=${key}&appid=${id}`;
  },

  // http://localhost:3000/GetGlobalStatsForGame/292030/?count=1&name[0]=ha_ee
  GetGlobalStatsForGame: (data) => {
    const { id, query } = data;
    const getQuery = query.split('?').join('&');
    return `http://api.steampowered.com/ISteamUserStats/GetGlobalStatsForGame/v001/?appid=${id + getQuery}`;
  },

  // http://localhost:3000/GetPlayerAchievements/76561198119402590/292030
  GetPlayerAchievements: (data) => {
    const { key, id, appid } = data;
    return `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v001/?key=${key}&steamid=${id}&appid=${appid}`;
  },

  // http://localhost:3000/GetGlobalAchievementPercentagesForApp/292030
  GetGlobalAchievementPercentagesForApp: (data) => {
    const { id } = data;
    return `http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v002/?gameid=${id}`;
  },

  // http://localhost:3000/GetUserStatsForGame/76561198119402590/292030
  GetUserStatsForGame: (data) => {
    const { key, id, appid } = data;
    return `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v002/?key=${key}&steamid=${id}&appid=${appid}`;
  },
};
