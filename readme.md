## About

Tiger's Ranking Service is a node module that was created by Tiger#9711. This project was created because I want my customers to be able to use this module for their discord bot's free of charge.

Tiger's Ranking Service allows you to do many things that you normall do on the [Roblox](https://www.roblox.com) website through a Node.js interface. You can use this module along with Roblox's [HttpService](http://wiki.roblox.com/index.php?title=API:Class/HttpService) to create scripts that interact with the website. Keep in mind that this does not use the latest version of this module and it is **highly** encouraged to learn to use the library directly.

## Pre Reqs.

- [**node.js**](https://nodejs.org/en/download/current/)

## Installing

With node.js installed, just run this command
```bash
# Run this to install the package to your local bot.
$ npm i tigersrankingservice

# Run this to instead install the module globally so you can use it anywhere.
$ npm i tigersrankingservice -g
```
That's it!

### Example
This is an example:
```js
const ranking = require('tigersrankingservice');
var Cookie = ''; // Obvious
var GroupID = 0; // Pretty simple
var UserID = 0; // You should know this
ranking.promote(Cookie, GroupID, UserID)
console.log(`Promoted ${UserID} in group ${GroupID}`);
```

## Credits

* [sentanos](https://github.com/sentanos) - Some parts are from him.

## License

MIT