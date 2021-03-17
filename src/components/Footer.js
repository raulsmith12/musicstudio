import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => (
	<Container fluid className="footer-container">
		<div className="img-center">
			<img src="https://galacticblue.net/musicstudio/img/logo.png" width="18%" alt="Grey Dragon Studios" />
		</div>
		<h3 className="text-center text-white py-3">&copy; {(new Date().getFullYear())} Grey Dragon Studios. All Rights Reserved.</h3>
		<p align="center" className="text-white mb-0 pb-3">
			<a href="/musicstudio/" className="text-white">Home</a>&nbsp;|&nbsp;
			<a href="/musicstudio/contact-us" className="text-white">Contact</a>&nbsp;|&nbsp;
			<a href="/musicstudio/privacy-policy" className="text-white">Privacy Policy</a>
		</p>
	</Container>
);

export default Footer;
