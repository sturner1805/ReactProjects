import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			count : 0
		}
		console.log('Constructor has been called' + 'Initial Count is: ' + this.state.count);
	}
	
	increase(){
		this.setState({count: this.state.count+1});
	}
	
	componentWillMount(){
		console.log ('component is about to mount');
	}
	
	componentDidMount(){
		console.log('componentDidMount: Component just mounted');
	}
	
	componentWillUpdate(newProps, newState){
		console.log('componentWillUpdate: Component is about to update');
	}
	
	omponentDidUpdate(currentProps, currentState){
		console.log('componentDidUpdate: Component just updated');
	}
	
	componentWillUnmount(){
		console.log('componentWillUnmount: Component is about to be removed');
	}
	componentWillReceiveProps(newProps){
		console.log('componentWillReceiveProps: Component will get new props!');
	}
	
	
	shouldComponentUpdate(newProps, newState){
		console.log('shouldComponentUpdate?')
		if (newState.count < 5){
			console.log('Condition met: Component should update');
			return true;
		}else{
			console.log('Condition not met: Component should NOT update and has been removed');
			ReactDOM.unmountComponentAtNode(content);
			return false;
		}
	}
	
	render() {
		var backgroundStyle = {
			padding: 50,
			border: "#333 2px dotted",
			width: 250,
			height: 100,
			borderRadius: 10,
			textAlign: "center"
		};
		var numberStyle = {
			fontSize: 24
		};
		return(
			<div style = {backgroundStyle}>
				<p style = {numberStyle}>{this.state.count}</p>
				<p>Please inspect the console</p>
				<button onClick = {this.increase.bind(this)}>Increase</button>
			</div>
		);
	}		
}