import React, { Component } from 'react';
import Router from 'react-router';
import { RouteHandler, Link } from 'react-router';

export default class App extends Component {

	render() {
    	return (
      		<div>
        		<RouteHandler/>
      		</div>
    	);
  	}
}

