import React,{Component} from 'react';
	import logo from './logo.svg';
	import './App.css';
	
	const {Message} = require('./protos/helloworld_pb.js');
	const {ChatServicePromiseClient } = require('./protos/helloworld_grpc_web_pb.js');
	var client =  new ChatServicePromiseClient('http://localhost:8080',{"grpc.max_connection_age_m" : "4s"},null);
	class App extends Component {
	   constructor(props) {
		super(props);
		console.log('Constructed');
		this.sendMessage= this.sendMessage.bind(this);
		this.startChat= this.startChat.bind(this);
		this.state = {
		  user : '1'
		};
	}
		startChat = ()=> {
let request = new Message();
console.log("starting chat");
request.setUser(this.state.user);
request.setText('User connected to server!');
let stream = client.join(request);
stream.on('data', function(response) {
	console.log(response.getText());
	console.log(new Date());
  });
  stream.on('status', function(status) {
	console.log(status.code);
	console.log(status.details);
	console.log(status.metadata);
	console.log(new Date());
  });
  stream.on('end', function(end) {
	  console.log('ended')
	  console.log(new Date());
	// stream end signal
  });
stream.on('error', function(err) {
  console.log(err);
  console.log(new Date());
});
		  }
sendMessage = ()=>
{
// {var deadline = new Date();
// 	deadline.setSeconds(deadline.getSeconds() + 2);

	let request = new Message();
	request.setUser(this.state.user);
	request.setText('event.target.value');
	//console.log(client);
client.send(request);

// console.log("sending message");
// 	let request = new Message();
// 	request.setUser(this.state.user);
// 	request.setText('event.target.value');
// 	//console.log(client);
// 	client.send(request);
// 	console.log("sended");
}
	  render() {
		  console.log("Rerender");
	    return (
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
			  <input onChange ={this.sendMessage} />
			  <button style={{padding:10}} onClick={this.startChat}>Join</button>
			  <button style={{padding:10}} onClick={this.sendMessage}>Send Message</button>
	        </header>
	      </div>
	    );
	  }
	}
	

	export default App;