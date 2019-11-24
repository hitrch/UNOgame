const http = require("http");
let grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
var proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("../protos/helloworld.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);
const REMOTE_SERVER = "localhost:8080";
let client = new proto.chat.ChatService(
  REMOTE_SERVER,
  grpc.credentials.createInsecure()
);
const port = 1337;
const requestHandler = (request, response) => {
    let channel = client.join({ user : "1", text : "2" });
    // channel.on("data", (message)=> 
    // {
    //   console.log(message.user);});
}

const server = http.createServer(requestHandler)
server.listen(port, () => {

    // make a request
    const options = {
      port: 1337,
      host: '127.0.0.1',
    };

    const req = http.request(options);
    req.end();
    
  })


