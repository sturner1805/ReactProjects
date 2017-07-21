import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from 'react-router';
import Route from 'react-router';
import IndexRoute from 'react-router';
import browserHistory from 'react-router';
import Actors from './Actors/Actors';
import ActorDetails from './Actors/ActorDetails';
import Films from './Films/Films';
import FilmDescription from './Films/FilmDescription';
import Home from './Main/Home';


ReactDOM.render(
	<App />, document.querySelector('#app'),
	<Router history = {browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/films" component={Films}>
				<Route path="/films/:filmName" component={FilmDescription} />
			</Route>
			<Route path="/actors" component={Actors}>
				<Route path="/actors/:actorName" component={ActorDetails} />
			</Route>
		</Route>
	</Router>
);