import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header-container'>
				<h3 className='header-icon'>+</h3>
				<h3 className='header-title'>Help Center</h3>
			</div>

			<div className='header-container'>
				<h3 className='header-icon'>=</h3>

				<img className='pic' alt='img' src='' />
			</div>
		</div>
	);
}

export default Header;
