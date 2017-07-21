import react from 'react';
import {Title} from './Title';
import {MainNav} from './MainNav';

export function Header(){
	return(
		<div ClassName = "top-bar">
			<Title />
			<MainNav />
		</div>
	);
}