import React from 'react';
import axios from 'axios';

export default class AllGuides extends React.Component {

	constructor(props) {
	    super(props);
		this.data = [];
		this.state = { data: this.data };
		this.addInfo = this.addInfo.bind(this);
		this.removeInfo = this.removeInfo.bind(this);
	}

	getData(e) {
	  	axios.get('https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&expand=owner,subjects').then(function(response) {
	  		e.data = response.data;
		  	e.setState({ data: e.data });
		});
	}

	componentDidMount() {
		this.getData(this);
	}

	addInfo(event, data) {
		for (var i = 0; i < this.state.data.length; i++) {
			if ( JSON.stringify(this.data[i]) === JSON.stringify(data) ) {
				this.data[i].active = true;
				break;
			}
		}
		this.setState({ data: this.data })
	}

	removeInfo(event, data) {
		for (var i = 0; i < this.state.data.length; i++) {
			if ( JSON.stringify(this.data[i]) === JSON.stringify(data) ) {
				this.data[i].active = false;
				break;
			}
		}
		this.setState({ data: this.data })
	}

	render() {
		var count1 = 0;
		var count2 = 0;
		return (
			<div>
				<p className='message'>Show { this.state.data.length } guides.</p>
				<div className='col-md-6'>
					<ul>
						{
							this.state.data.map(i => {
								count1++;
								if (count1 * 2 <= this.state.data.length) {
									if (i.active) {
										return (
											<li>
												<a href={i.url} target='_blank'>{i.name}</a>
												<i className='fa fa-info' onClick={((e) => this.removeInfo(e, i))}>
													<div className='guide-info'>
														<p>{i.name}</p>
														<a className='owner' href={i.friendly_url}>{i.owner.first_name + ' ' + i.owner.last_name}</a>
														<span><i className='fa fa-edit icon-small'/>{i.published}</span>
														<span><i className='fa fa-eye icon-small'/>{i.count_hit}</span>
														<span className='subjects'>Subjects:
															{
															}
														</span>
														<span className='tags'>Tags:
															{
															}
														</span>
													</div>
												</i>
											</li>
										)
									} else {
										return <li><a href={i.url} target='_blank'>{i.name} </a><i className='fa fa-info' onClick={((e) => this.addInfo(e, i))}> </i></li>
									}
								}
							})
						}
					</ul>
				</div>
				<div className='col-md-6'>
					<ul>
						{
							this.state.data.map(i => {
								count2++;
								if (count2 * 2 > this.state.data.length) {
									if (i.active) {
										return (
											<li>
												<a href={i.url} target='_blank'>{i.name}</a>
												<i className='fa fa-info' onClick={((e) => this.removeInfo(e, i))}>
													<div className='guide-info'>
														<p>{i.name}</p>
														<a className='owner' href={i.friendly_url}>{i.owner.first_name + ' ' + i.owner.last_name}</a>
														<span><i className='fa fa-edit icon-small'/>{i.published}</span>
														<span><i className='fa fa-eye icon-small'/>{i.count_hit}</span>
														<span className='subjects'>Subjects:
															{
															}
														</span>
														<span className='tags'>Tags:
															{
															}
														</span>
													</div>
												</i>
											</li>
										)
									} else {
										return <li><a href={i.url} target='_blank'>{i.name} </a><i className='fa fa-info' onClick={((e) => this.addInfo(e, i))}> </i></li>
									}
								}
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}