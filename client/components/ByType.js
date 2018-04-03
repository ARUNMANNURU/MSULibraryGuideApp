import React from 'react';
import axios from 'axios';

export default class ByType extends React.Component {

	constructor(props) {
	    super(props);
		this.data = [];
		this.state = { data: this.data };
	}

	getData(e) {
	  	axios.get('http://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&expand=owner').then(function(response) {
	  		var data = [];
	  		for (var i = 0; i < response.data.length; i++) {
	  			var j = 0;
	  			while (true) {
	  				if (!data[j]) {
	  					data.push({
	  						owner: response.data[i].owner,
	  						sub_data: [response.data[i]]
	  					});
	  					break;
	  				} else if (data[j].owner.id == response.data[i].owner.id) {
	  					data[j].sub_data.push(response.data[i]);
	  					break;
	  				} else {
	  					j++;
	  				}
	  			}
	  		}
	  		console.log(data);
	  		e.data = data;
		  	e.setState({ data: e.data });
		});
	}

	componentDidMount() {
		this.getData(this, {site_id: '8488', key: '0b8da796b00334ae3471f60e6a10e8c6'});
	}

	render() {
		return (
			<div>
				sdfsdf
			</div>
		);
	}
}