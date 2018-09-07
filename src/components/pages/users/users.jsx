import React, { Component } from "react";

export class Users extends Component {
	constructor() {
		super();
	}

	render() {
		const { user, logOut, getSomethingSecret } = this.props;
		return (
			<div className="form__wrapper">
				<h1 className="title">Welcome, {user}!</h1>
				<div></div>
				<button className="secret-button" onClick={getSomethingSecret}>Get something secret!</button>
				<button onClick={logOut}>Logout</button>
			</div>
		);
	}
}

