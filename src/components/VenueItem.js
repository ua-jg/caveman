import React, { Component } from 'react';
import Link from 'react-router';



export default class VenueItem extends Component {
  
	
	constructor(props) {
    	super(props);
      const {id, name, address, city, country, revenue } = props;
    	this.state = { id, name, address, city, country, revenue };
  	}

  componentDidMount () {
		
  }

  render() {
  	const { state } = this;
    return (
        <div style={venueItem}>
          <div style={name}>{state.name}</div>
          <div style={field}>{state.city}</div>
          <div style={field}>{state.country}</div>
          <div style={field}>{state.revenue}</div>
       </div>
    );
  }
}

var venueItem = {
  "fontFamily": "Helvetica",
  "fontSize": "12px",
};

var field = {
  width: "140px",
  display: "inline-block",
  height: "40px"
};

var name = {
  fontWeight: "bold",
  width: "120px",
  display: "inline-block",
  height: "40px",
  "fontSize": "16px"
};
