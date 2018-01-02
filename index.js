var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile('/Users/patrickconrey/Documents/websites/resume/index.html');
});
app.get('/css/main.css', function(req, res){
    res.sendFile('/Users/patrickconrey/Documents/websites/resume/css/main.css');
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});