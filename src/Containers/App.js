import React,{Component}  from 'react';
import CardList from '../Components/CardList';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component{
constructor(){
super()
this.state={
robots: [] ,
searchfield:''
}
}
componentDidMount(){
	console.log('before fetch');
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
			this.setState({ robots : robots});	
		});	
}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	 }
	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
		return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})
		if(this.state.robots.length===0){
			return <h1>L O A D I N G . . . . . .</h1>
		}
		else{
	 return(
		<div className='tc'>
			<h1>ROBODOST</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		);
	}
}
}
export default App;
