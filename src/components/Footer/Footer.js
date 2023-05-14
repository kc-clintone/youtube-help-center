import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className='main-container'>
			<div className='footer-container left'>
				<h3 className='footer-title'>
					&copy;2022 . HelpCenter . terms of services
				</h3>
				<button className='lang-btn btn' type='button'>
					English (United States.)
				</button>
			</div>
			<div className='footer-container right'>
				<h3 className='theme-icon'>=</h3>
				<button className='feedback-btn btn' type='button'>
					Send feedback about our Help Center.
				</button>
			</div>
		</div>
	);
}

export default Footer;
