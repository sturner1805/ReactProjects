import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';

export default class App extends React.Component {
	constructor (){
		super();
		var favouritesArray = [];
		
		if(localStorage.favourites){
			favouritesArray = JSON.parse(localStorage.favourites);
		}
		
		this.state = {
			currentAddress: '41 Chapelfield',
			mapCoordinates:{
				lat: 52.587492,
				lng: 1.554171
			},
			favourites: favouritesArray
		}
	}
	
	render() {
		return (
			<div>
				<h1>Google Map</h1>
				<Search onSearch = {this.searchForAddress.bind(this)}/>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
				<CurrentLocation address={this.state.currentAddress} favourite = {this.isAddressInFavourites(this.state.currentAddress)} onFavouriteToggle = {this.favouriteToggle.bind(this)}/>
				<FavouritesList favouriteLocations = {this.state.favourites} activeLocationAddress = {this.state.currentAddress} onClick = {this.searchForAddress.bind(this)}/>
			</div>
		);
	}
	
	searchForAddress(address){
		let self = this;
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
				if(status !== 'OK') {
					self.setState({
						currentAddress : "Location not found..."
					});
					return;
				}
				let latlng = results[0].geometry.location;
				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});
	}
	
	isAddressInFavourites(currentAddress){
		let fav = this.state.favourites;
		for(let i=0 ; i<fav.length ; i++){
			if (fav[i].address === currentAddress){
				return true;
			}
		}
		return false;
	}
	
	favouriteToggle(currentAddress){
		if(this.isAddressInFavourites(currentAddress)){
			this.removeAddress(currentAddress);
		}else{
			this.addAddress(currentAddress);
		}
	}
	
	removeAddress(currentAddress){
		let fav = this.state.favourites;
		let index = -1;
		for(let i=0 ; i<fav.length ; i++){
			if (currentAddress === fav[i].address){
				index = i;
				break;
			}
		}
		if(index !== -1){
			fav.splice(index, 1);
			this.setState({favourites : fav});
			localStorage.favourites = JSON.stringify(fav);
		}
	}
	
	addAddress(currentAddress){
		let fav = this.state.favourites;
		fav.push({
			address : currentAddress,
			timeStamp : Date.now()
		})
		
	this.setState({favourites : fav});
	localStorage.favourites = JSON.stringify(fav);
	}
}