var io = require('socket.io')(4000);

io.on('connection', function (socket) {
  console.log('a person has connected'); 

  socket.broadcast.emit('message', { msg: socket.id + ' joined the chatroom' });  

  socket.on('message', function (data) {
    console.log('message: ' + data.msg);
    io.emit('message', { id: socket.id, msg: data.msg });
  });

  socket.on('requestID', function() {
    requestID(socket);
  });
});

io.on('disconnect', function(socket) {
  console.log('a person has disconnected');
});

function requestID(socket) {
  socket.emit('message', { msg: 'Welcome to this chatroom!' });  
  sendEmptyMsg(socket);
  socket.emit('myID', { id: socket.id });  
}

function sendEmptyMsg(socket) {
  socket.emit('message', { msg: '' });   
}