import React from 'react';

export default class CurrentLocation extends React.Component {
	render(){
		var class_name;
		if(this.props.address!=="Location not found..."){
			if(this.props.favourite){
				class_name="glyphicon glyphicon-star"
			}else{
				class_name="glyphicon glyphicon-star-empty"
			}
		}
			
		return(
			<div className = "col-xs-12 col-md-6 col-md-offset-3 current-location">
				<h4 id = "save-location">{this.props.address}</h4>
				<span className={class_name} onClick={this.toggleFavourite.bind(this)} aria-hidden='true'></span>
			</div>
		);
	}
	
	toggleFavourite(){
		this.props.onFavouriteToggle(this.props.address);
	}
}