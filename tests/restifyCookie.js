var CookieParser = require('restify-cookies');
var Restify = require('restify');
var server = Restify.createServer();
server.use(CookieParser.parse);
server.get('/', function (req, res, next) {
    var cookies = req.cookies; // Gets read-only cookies from the request
    res.setCookie('my-new-cookie', 'Hi There'); // Adds a new cookie to the response
    res.send(JSON.stringify(cookies));
});
server.listen(8080);