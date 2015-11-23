import React, { Component } from 'react';
import Store from '../stores/Venues';
import {GoogleMap, Marker} from "react-google-maps";

export default class Venue extends Component {
  
  	constructor(props) {
    	super(props);
    	this.state = {};
  	}

	componentDidMount () {
		this.state.id = this.props.routeParams.id;
		Store.listen(this.onStoreChange.bind(this));
  	}

  	onStoreChange() {
  		const state = Store.getVenue(this.state.id);
  		this.setState(state);
  	}

  render() {
  	const { name, address, city, country, revenue, notes } = this.state;
  	const lat = parseFloat(this.state.lat);
  	const lng = parseFloat(this.state.lng);
  	const marker = <Marker position={{lat: lat, lng: lng}} key={name} />;
  	const map = lat && lng ?
       		<GoogleMap containerProps={{
          		style: {
            		height: "300px",
          		},
        		}}
        		defaultZoom={6}
        		defaultCenter={{lat: parseFloat(lat), lng: parseFloat(lng)}}
      		>
      			{marker}
			</GoogleMap> : '';
  		
    return (
     	<div style={venue}>
      		<h1>{name}</h1>
      		{ map }
      		<p>{address}, {city}, {country}</p>
      		<p style={revenueStyle}>{revenue}</p>
      		<h3>Notes</h3> 
      		<p style={notesStyle}>{ notes }</p>
      	</div>
    );
  }
}

var venue = {
	fontFamily: "Helvetica",
	fontSize: "12px",
};

var revenueStyle = {
	fontSize: "18px",
	fontWeight: "bold",
	marginBottom: "32px"
};

var notesStyle = {
	fontSize: "14px",
	lineHeight: "20px"
};