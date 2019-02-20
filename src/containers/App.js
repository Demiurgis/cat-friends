import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { cats } from  '../cats';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField } from '../actions';
import { searchCats } from '../reducers';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			cats: [],
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({ cats: users }));
	}

	render() {
		const { cats } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredCats = cats.filter(cat => {
			return cat.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !cats.length ?  
			<h1 className='catTitle'>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='catTitle'>Cat Friends</h1>
					<SearchBox searchChange={ onSearchChange }/>
					<Scroll>
						<ErrorBoundry>
							<CardList cats={ filteredCats } />
						</ErrorBoundry>	
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);