var PROTO_PATH =  "./protos/helloworld.proto";
var grpc = require('grpc');
var fs = require("fs");
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var chat = protoDescriptor.chat;

let users = [];
 let message = [];
// Receive message from client joining
function doJoin(call, callback) {
  users.push(call);
  notifyChat({ user: "Server3", text: "n ..." });
}
 
// Receive message from client
function doSend(call, callback) {
  console.log(call.request);
  notifyChat(call.request);
}
 
// Send message to all connected clients
function notifyChat(message) {
  fs.appendFile('message.txt',  `${JSON.stringify(message)}\n`, (err) => {
    if (err) throw err;
    console.log('Logged!');
  });
  users.forEach(user => {
    user.write(message);
  });
}

function getServer() {
  var server = new grpc.Server();
  server.addService(chat.ChatService.service,{
    join: doJoin, send: doSend });
  return server;
}

if (require.main === module) {
  var server = getServer();
  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  server.start();
}

exports.getServer = getServer;