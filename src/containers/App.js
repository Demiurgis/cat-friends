import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { cats } from  '../cats';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestCats } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchCats.searchField,
		cats: state.requestCats.cats,
		isPending: state.requestCats.isPending,
		error: state.requestCats.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestCats: () => dispatch(requestCats())
	};
}

class App extends Component {
	componentDidMount(){
		this.props.onRequestCats();
	}

	render() {
		const { searchField, onSearchChange, cats, isPending } = this.props;
		const filteredCats = cats.filter(cat => {
			return cat.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?  
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