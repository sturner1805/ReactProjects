import React from 'react';

export default class Map extends React.Component {
	render(){
		return(
			<div className = "map-overlay">
				<p>Loading...</p>
				<div id = "map"></div>
			</div>
		)
	}
	componentDidMount(){
		this.componentDidUpdate()
	}
	
	componentDidUpdate(){
		let maps = new GMaps ({
			el : "#map",
			lat : this.props.lat,
			lng : this.props.lng
		});
		
		maps.addMarker({
			lat : this.props.lat,
			lng : this.props.lng,
			title : "marker",
			infoWindow : {
				content : this.props.address
			}
		});
		
		/*GMaps.geolocate({
			success : function(position){
				maps.setCenter(position.coords.latitude, position.coords.longitude);
				maps.addMarker({
					lat : position.coords.latitude,
					lng : position.coords.longitude,
					title : "marker",
					icon : {
						url: "./14992013_10202299318961154_4317081752962613723_n.jpg"
					}
				});
			},
			error: function(error) {
			alert('Geolocation failed: ' + error.message);
			},
			not_supported: function() {
			alert("Your browser does not support geolocation");
			},
			/*always: function() {
				alert("Always");
			}
		});*/
	}
}