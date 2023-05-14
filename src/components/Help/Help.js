import React from 'react';
import './Help.css';

function Help() {
	return (
		<div className='container'>
			<h3 className='help-title'>How Can We Help?</h3>
			<div className='search-bar'>
				<input type={'search'} placeholder='Describe the issue here...' />
			</div>
		</div>
	);
}

export default Help;
