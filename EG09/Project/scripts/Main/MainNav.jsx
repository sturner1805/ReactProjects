import React from 'react';
import {IndexLink, Link} from 'react-router';

export function MainNav (){
	return(
		<nav ClassName = "top-bar-right" id = "menu">
			<h6 ClassName = "hide">Stie Navigation</h6>
			<ul ClassName = "vertical medium-horizontal menu">
				<li>
					<IndexLink ClassName = "pageLink" to = "/">Home</IndexLink>
				</li>
				<li>
					<Link ClassName = "pageLink" to = "/Films">Films</Link>
				</li>
				<li>
					<Link ClassName = "pageLink" to = "/Actors">Actors</Link>
				</li>
			</ul>
		</nav>
	);
}