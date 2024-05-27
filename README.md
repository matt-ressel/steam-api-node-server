## STEAM API NODE SERVER

Node server which makes it easier to use the Steam Web API.

#### Allows Cross Origin Resource Sharing

> (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources

## Installation

```bash
$ git clone https://github.come/matt-ressel/steam-api-node-server.git

$ node server.js
```

## How to use the Server

1. Get your Steam Web API developer key. [Get one here.](https://steamcommunity.com/dev/apikey)
2. Read the Steam Web API documentation. [Doc.](https://developer.valvesoftware.com/wiki/Steam_Web_API)
3. Once you have the key, copy it into the "server.js" file.

```javascript
// server.js
const http = require('http');
const steamAPI = require('./api/index');

const port = 3000; // PORT
const STEAM_API_KEY = 'YOUR STEAM WEB API KEY';
// ...
```

5. All APIs are located in the 'api' folder.
6. It's similar to the Steam Web API, you use methods, parameters or query.
7. Create a client-side request.

### Request URL format

`https://{hostname}/{method}/{parameters}`

`http://locahost:3000/GetPlayerSummaries/76561198119402590`

### Example of Usage

```javascript
// your code..
// steam_id
const steam_id = '76561198119402590';
// app_id
const app_id = '292030';
// create the Steam API URL we want to use
const url = `http://localhost:3000/steam/GetPlayerAchievements/${steam_id}/${app_id}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log('[DATA]:', data);
  })
  .catch((err) => console.log('[ERROR]:', err));
```

## List of API

ISteamUser:

- `'/GetPlayerSummaries/steamid'`
- `'/ResolveVanityURL/vanityurl'`
- `'/GetPlayerBans/steamid'`
- `'/GetFriendList/steamid'`

ISteamUserStats:

- `'/GetSchemaForGame/appid'`
- `'/GetGlobalStatsForGame/appid/?count=1&name='avaiablegamestats'`
- `'/GetPlayerAchievements/steamid/appid'`
- `'/GetGlobalAchievementPercentagesForApp/gameid'`
- `'/GetUserStatsForGame/steamid/:appid'`

IPlayerService:

- `'/GetOwnedGames/steamid'`
- `'/GetRecentlyPlayedGames/steamid'`
- `'/IsPlayingSharedGame/steamid/appid_playing'`

ISteamNews:

- `'/GetNewsForApp/appid/?count=10&maxlength=300'`


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/matt-ressel/steam-api-node-server/blob/main/LICENSE)
