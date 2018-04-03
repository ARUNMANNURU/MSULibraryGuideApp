//client/routes.js
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';
import AllGuides from './components/AllGuides';
import ByGroup from './components/ByGroup';
import BySubject from './components/BySubject';
import ByOwner from './components/ByOwner';

export default class Routes extends React.Component {

	constructor(props) {
	    super(props);
		this.data = [];
		this.state = { data: this.data };
		this.tabWith = this.tabWith.bind(this);
	}

	componentDidMount() {
		// this.getData(this, {site_id: '8488', key: '0b8da796b00334ae3471f60e6a10e8c6'});
	}

	tabWith(param) {
		this.setState({ activeTab: param });
	}

	render() {
	    const selectRow = {
	      	mode: 'checkbox',
	      	clickToSelect: true
	    };
	    return (
	    	<div className='container'>
	    		<div className='filter'>
	    			<Link to='/all_guides' className={ this.state.activeTab == '1' ? 'active' : '' } onClick={() => this.tabWith('1')}>All GUIDES</Link>
	    			<Link to='/by_group' className={ this.state.activeTab == '2' ? 'active' : '' } onClick={() => this.tabWith('2')}>BY GROUP</Link>
	    			<Link to='/by_subject' className={ this.state.activeTab == '3' ? 'active' : '' } onClick={() => this.tabWith('3')}>BY SUBJECT</Link>
	    			<Link to='/by_owner' className={ this.state.activeTab == '5' ? 'active' : '' } onClick={() => this.tabWith('5')}>BY OWNER</Link>
	    		</div>
			    <div className='row'>
					<Route path='/all_guides' component={AllGuides} />
					<Route path='/by_group' component={ByGroup} />
					<Route path='/by_subject' component={BySubject} />
					<Route path='/by_owner' component={ByOwner} />
				</div>
			</div>
	    );
	}
}