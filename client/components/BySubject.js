import React from 'react';
import axios from 'axios';

export default class BySubject extends React.Component {

	constructor(props) {
	    super(props);
		this.data = [];
		this.state = { data: this.data };
	}

	getData(e) {
	  	axios.get('http://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&expand=subjects').then(function(response) {
	  		var data = [];
	  		var count = 0;
	  		for (var i = 0; i < response.data.length; i++) {
	  			if (response.data[i].subjects) {
		  			var j = 0;
		  			while (true) {
		  				if (!data[j]) {
		  					data.push({
		  						subjects: response.data[i].subjects,
		  						sub_data: [response.data[i]]
		  					});
		  					count++;
		  					break;
		  				} else if (data[j].subjects[0].id == response.data[i].subjects[0].id) {
		  					data[j].sub_data.push(response.data[i]);
		  					count++;
		  					break;
		  				} else {
		  					j++;
		  				}
		  			}
		  		}
	  		}
	  		e.data = data;
		  	e.setState({ data: e.data, count: count });
		});
	}

	componentDidMount() {
		this.getData(this);
	}

	render() {
		var count = this.state.count;
		var count1 = 0;
		var count2 = 0;
		return (
			<div>
				<p className='message'>Show { this.state.data.length } subjects.</p>
				<div className='col-md-6'>
					{
						this.state.data.map(i => {
							if (count1 * 2 <= count) {
								return (
									<ul>{ i.subjects[0].name }
										{
											i.sub_data.map(j => {
												count1++;
												return <li><a href={ j.url } target='_blank'>{ j.name }</a></li>
											})
										}
									</ul>
								)
							}
						})
					}
				</div>
				<div className='col-md-6'>
					{
						this.state.data.map(i => {
							if (count2 * 2 > count) {
								return (
									<ul>{ i.subjects[0].name }
										{
											i.sub_data.map(j => {
												count2++;
												return <li><a href={ j.url } target='_blank'>{ j.name }</a></li>
											})
										}
									</ul>
								)
							} else {
								i.sub_data.map(j => {
									count2++;
								})
							}
						})
					}
				</div>
			</div>
		);
	}
}