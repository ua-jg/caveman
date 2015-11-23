import Reflux from 'reflux';
import _ from 'lodash';
// import Actions from 'actions/';

const Store = Reflux.createStore({

  init() {
    console.log("Get venues");
    fetch('http://localhost:3042/api/venues')
      .then(function(response) {
        return response.json();
      }).then(function(venues) {
        this.state = { venues };
        this.trigger(this.state);
      }.bind(this));
  },

  getVenues() {
    return this.state.venues;
  },

  getVenue(id) {
    const { venues } = this.state;
    const index = _.findIndex(venues, (venue) => {
      return venue.id == id;
    });
    return venues[index];
  }

});

export default Store;
