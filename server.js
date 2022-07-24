const express = require('express');
const path = require('path');

const app = express();
let http = require('http');


app.use(express.static(__dirname + '/dist/sample'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/sample/index.html'));
});

let server = http.Server(app);


let io = require('socket.io')(server, { cors: { origin: "*" } });


server.listen(process.env.PORT || 3000, ()=>{
    console.log('server started');
})

io.on('connection',socket=>{
    console.log('socket connected');
})