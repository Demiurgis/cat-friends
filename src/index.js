import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import { searchCats } from './reducers';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const store = createStore(searchCats);

ReactDOM.render(
	<Provider store= { store }>
		<App />	
	</Provider>, document.getElementById('root'));
	
serviceWorker.unregister();
