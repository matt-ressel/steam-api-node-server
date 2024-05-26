module.exports = {
  // http://localhost:3000/GetPlayerSummaries/76561198119402590
  GetPlayerSummaries: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v002/?key=${key}&steamids=${id}`;
  },

  // http://localhost:3000/ResolveVanityURL/mattname
  ResolveVanityURL: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v001/?key=${key}&vanityurl=${id}`;
  },

  // http://localhost:3000/GetPlayerBans/76561198119402590
  GetPlayerBans: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/ISteamUser/GetPlayerBans/v001/?key=${key}&steamids=${id}`;
  },

  // http://localhost:3000/GetFriendList/76561198119402590
  GetFriendList: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/ISteamUser/GetFriendList/v001/?key=${key}&steamid=${id}`;
  },
};
