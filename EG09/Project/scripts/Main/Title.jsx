import React from 'react';

export function Title (){
	return(
		<div ClassName = "top-bar-title">
			<span data-responsive-toggle = "menu">
				<button type = "button" className = "menue-icon" data-toggle></button>
			</span>
			<h1>A STAR WARS Fansite</h1>
		</div>
	);
}