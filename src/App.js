import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/pages/sign-in/sign-in.css";
import "./components/pages/sign-up/sign-up.css";
import "./components/pages/users/users.css";
import { SignUp } from "./components/pages/sign-up/sign-up.jsx";
import { SignIn } from "./components/pages/sign-in/sign-in.jsx";
import { Users } from "./components/pages/users/users.jsx";

class App extends Component {
    constructor() {
        super();

        this.state = {
            activePage: "signUp",
            inputValueEmail: "",
            inputValuePassword: "",
            inputValueConfirmPassword: "",
            inputValueUser: "",
            activeUser: "",
            errorMsg: "",
            secret: ''
        };
    }

    inputChangeEmail = event => {
        this.setState({
            inputValueEmail: event.target.value
        });
    };

    inputChangePassword = event => {
        this.setState({
            inputValuePassword: event.target.value
        });
    };

    inputChangeConfirmPassword = event => {
        this.setState({
            inputValueConfirmPassword: event.target.value
        });
    };

    inputChangeUser = event => {
        this.setState({
            inputValueUser: event.target.value
        });
    };

    createUser = event => {
        event.preventDefault();

        const user = {
            user: this.state.inputValueUser,
            email: this.state.inputValueEmail,
            password: this.state.inputValuePassword
        };

        this.fetchFunction(user, "signup");
    };

    logIn = event => {
        event.preventDefault();

        const user = {
            user: this.state.inputValueUser,
            password: this.state.inputValuePassword
        };

        this.fetchFunction(user, "login");
    };

    fetchFunction = (newUser, path) => {
        const { user, email, password } = newUser;
        const url = `https://flatearth-api.herokuapp.com/api/v1/auth/${path}`;

        const response = fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                email: email,
                password: password
            })
        });

        response
            .then(data => {
                console.log(data);
                return data.json();
            })
            .then(obj => {
                console.log(obj);

                let status = obj.status;
                let message = obj.message;

                if (status === "success" && path === "signup") {
                    this.setState({
                        activePage: "signIn",
                        errorMsg: ""
                    });
                }

                if (status === "success" && path === "login") {
                    let secret = obj.message.token;
                    console.log(secret);
                    this.setState({
                        activePage: "users",
                        activeUser: user,
                        errorMsg: "",
                        secret: secret
                    });
                }

                if (status === "error") {
                    this.setState({
                        errorMsg: message
                    });
                }

                console.log(status);
            });

    };

    goToSignIn = () => {
        this.setState({
            activePage: "signIn"
        });
    };

    logOut = () => {
        this.setState({
            activePage: "signUp",
            activeUser: "",
            errorMsg: ""
        });
    }

    getSomethingSecret = () => {
        const url = `https://flatearth-api.herokuapp.com/api/v1/auth/secret`;
        const secretKey = this.state.secret;
        const response = fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${secretKey}`
            }
        });

        response
            .then(data => {
                console.log(data);
                return data.json();
            })
            .then(obj => {
                console.log(obj);//можно вывести в табличку всех юзеров)))
            })
    }


    render() {
        const { activePage, activeUser, errorMsg } = this.state;

        if (activePage == "signUp") {
            return (
                <main className="wrapper">
                    <SignUp
                        createUser={this.createUser}
                        inputChangeEmail={this.inputChangeEmail}
                        inputChangePassword={this.inputChangePassword}
                        inputChangeConfirmPassword={this.inputChangeConfirmPassword}
                        inputChangeUser={this.inputChangeUser}
                        errorMsg={errorMsg}
                        signIn={this.goToSignIn}
                    />
                </main>
            );
        }

        if (activePage == "signIn") {
            return (
                <main className="wrapper">
                    <SignIn
                        user={activeUser}
                        inputChangeUser={this.inputChangeUser}
                        inputChangePassword={this.inputChangePassword}
                        logIn={this.logIn}
                        errorMsg={errorMsg}
                    />
                </main>
            );
        }

        if (activePage == "users") {
            return (
                <main className="wrapper">
                    <Users 
                        user={activeUser}
                        logOut={this.logOut}
                        getSomethingSecret={this.getSomethingSecret} />
                </main>
            );
        }
    }
}

export default App;
