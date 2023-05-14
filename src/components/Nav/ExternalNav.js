import React from 'react';
import './Nav.css';

function ExternalNav() {
	return (
		<div className='nav'>
			<div className='nav-container'>
				<h3 className='active-sub-title'>Help center</h3>
				<h3 className='nav-sub-title'>Community</h3>
			</div>
			<div className='nav-container'>
				<h3 className='nav-sub-title'>Open link</h3>
				<h3 className='nav-sub-title'>Get Support</h3>
			</div>
		</div>
	);
}

export default ExternalNav;
