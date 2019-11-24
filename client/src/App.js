import React,{Component} from 'react';
	import logo from './logo.svg';
	import './App.css';
	
	const {Message} = require('./protos/helloworld_pb.js');
	const {ChatServiceClient } = require('./protos/helloworld_grpc_web_pb.js');
	var client =  new ChatServiceClient ('http://localhost:8080',null,null);

	

	class App extends Component {
	   constructor(props) {
		super(props);
		this.sendMessage= this.sendMessage.bind(this);
		this.state = {
		  user : '1'
		};
	}
		startChat =()=> {
let request = new Message();
console.log("starting chat");
request.setUser(this.state.user);
request.setText('User connected to server!');
let stream = client.join(request);
stream.on('data', function(response) {
	console.log(response.getText());
  });
  stream.on('status', function(status) {
	console.log(status.code);
	console.log(status.details);
	console.log(status.metadata);
  });
  stream.on('end', function(end) {
	  console.log('ended')
	// stream end signal
  });
		  }
sendMessage ()
{
// {var deadline = new Date();
// 	deadline.setSeconds(deadline.getSeconds() + 2);
console.log("sending message");
	let request = new Message();
	request.setUser(this.state.user);
	request.setText('event.target.value');
	console.log(client);
	client.send(request);
	console.log("sended");
}
	  render() {
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
