import React, { Component } from "react";

export class SignIn extends Component {
	constructor() {
		super();
	}

	render() {
		const { inputChangeUser, inputChangePassword, logIn, errorMsg } = this.props;

		return (
			<div className="form__wrapper">
				<h1 className="title"></h1>
				<form action="#" method="post" name="signup">
					<fieldset>
						<legend>Sign in</legend>
						<p>
							<input
								id="username"
								type="text"
								name="email"
								placeholder="Username"
								onInput={inputChangeUser}
							/>
							<label htmlFor="username" className="form__label">
								Username
							</label>
						</p>
						<p>
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Password"
								onInput={inputChangePassword}
							/>
							<label htmlFor="password" className="form__label">
								Password
							</label>
						</p>
					</fieldset>

					<p>
						<input
							type="submit" 
							value="Sign in!" 
							onClick={logIn}
						/>
					</p>
				</form>
				<h2 className="error">{errorMsg}</h2>
			</div>
		);
	}
}
