import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-light" style={{bottom: "0", position: "relative", width: "100%"}}>
		<p>
			Made with <i className="fa fa-heart text-danger " /> by{" "}
			<a href="https://github.com/boxmancoder" target="_blank" className="text-light">Isaac F</a>
		</p>
	</footer>
);