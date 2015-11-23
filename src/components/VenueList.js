import React, { Component } from 'react';
import VenueItem from './VenueItem';
import Store from '../stores/Venues';

export default class VenueList extends Component {
  
	constructor(props) {
    	super(props);
    	this.state = {
    		venues: []
    	};
  	}

  	componentDidMount () {
		Store.listen(this.onStoreChange.bind(this));
  	}

  	onStoreChange(state) {
  		this.setState({
  			venues: state.venues
  		});
  	}

  render() {
  	const venues = this.state.venues.map((venue) => {
  		return <VenueItem key={venue.id} 
  			id={venue.id}
  			name={venue.name} 
  			address={venue.address} 
  			city={venue.city}
  			country={venue.country}
  			revenue={venue.revenue} />;
  	});
    return (
      <div>
      	{venues}
      </div>
    );
  }
}
