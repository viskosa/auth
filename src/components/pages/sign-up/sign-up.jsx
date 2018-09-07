import React, { Component } from "react";

//const url = "https://flatearth-api.herokuapp.com/api/v1/auth/login";

export class SignUp extends Component {
	constructor() {
		super();
	}

	componentDidMount() {

		//this.getDataFromForm(form);

		/*const { email, password, confirmPassword, user } = form.elements;

		if (!email.value) {
			alert("заполните email");
			return;
		}
		if (!password.value) {
			alert("заполните password");
			return;
		}
		if (!confirmPassword.value) {
			alert("заполните confirmPassword");
			return;
		}
		if (!user.value) {
			alert("заполните user");
			return;
		}

		if (password.value != confirmPassword.value) {
			alert("Пароли не совпадают!");
			return;
		}*/

		/*const response = fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				user: 'sa',
				password: 'admin',

			}) 
		});

		response.then(data => {
			console.log(data.json());
		})*/
	}

	render() {
		const {
			inputChangeEmail,
			inputChangePassword,
			inputChangeConfirmPassword,
			inputChangeUser,
			createUser,
			errorMsg,
			signIn
		} = this.props;

		return (
			<div className="form__wrapper">
				<form action="#" method="post" name="signup">
					<fieldset>
						<legend>Sign up</legend>
						<p>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="E-mail"
								onInput={inputChangeEmail}
							/>
							<label htmlFor="email" className="form__label">
								Email
							</label>
						</p>
						<p>
							<input
								id="password-signup"
								type="password"
								name="password"
								placeholder="Password"
								onInput={inputChangePassword}
							/>
							<label
								htmlFor="password-signup"
								className="form__label"
							>
								Password
							</label>
						</p>
						<p>
							<input
								id="confirm-password"
								type="password"
								name="confirmPassword"
								placeholder="Confirm password"
								onInput={inputChangeConfirmPassword}
							/>
							<label
								htmlFor="confirm-password"
								className="form__label"
							>
								Confirm password
							</label>
						</p>
						<p>
							<input
								id="username-signup"
								type="text"
								name="user"
								placeholder="Username"
								onInput={inputChangeUser}
							/>
							<label
								htmlFor="username-signup"
								className="form__label"
							>
								Username
							</label>
						</p>
					</fieldset>

					<p>
						<input
							type="submit"
							value="Sign up!"
							onClick={createUser}
						/>
					</p>
				</form>
				<h2 className="error">{errorMsg}</h2>
				<div>
					<p>Already have an account?</p>
					<button onClick={signIn}>Sign in</button>
				</div>
			</div>
		);
	}
}
