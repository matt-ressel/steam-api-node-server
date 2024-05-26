module.exports = {
  // http://localhost:3000/GetOwnedGames/76561198119402590
  GetOwnedGames: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/IPlayerService/GetOwnedGames/v001/?key=${key}&steamid=${id}`;
  },

  // http://localhost:3000/GetRecentlyPlayedGames/76561198119402590
  GetRecentlyPlayedGames: (data) => {
    const { key, id } = data;
    return `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v001/?key=${key}&steamid=${id}`;
  },

  // http://localhost:3000/IsPlayingSharedGame/76561198119402590/292030
  IsPlayingSharedGame: (data) => {
    const { key, id, appid } = data;
    return `http://api.steampowered.com/IPlayerService/IsPlayingSharedGame/v001/?key=${key}&steamid=${id}&appid=${appid}`;
  },
};
