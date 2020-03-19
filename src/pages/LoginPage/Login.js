import React, { createRef } from "react";
import { Fragment } from "react";

const userInfo = {
    Name: "admin",
    password: 12345
};

export class Login extends React.Component {
    submit = e => {
        // e.preventDefault();
        let userName = this.userName.value;
        let userPass = this.userPass.value;
        let status;
        console.log(this.userName.value, this.userPass.value);
        status = userInfo.Name == userName && userInfo.password == userPass;
        localStorage.setItem(`userStatus`, status);
        console.log(status);
        if (!status) {
            alert(`Error, incorrect User Name and Password`);
        }

        if (status) {
            this.props.setIsLoggedIn(true);
            this.props.history.push("/userProfile");
        }
    };

    render() {
        return (
            <Fragment>
                <h1>LoginPLS</h1>

                <form onSubmit={this.onSubmit}>
                    <span>User Name</span>
                    <br />
                    <input ref={input => (this.userName = input)} type="text" />
                    <br />
                    <span>Password</span>
                    <br />
                    {<input ref={input => (this.userPass = input)} type="text" />}
                    <br />
                    <button onClick={this.submit.bind(this)}>login</button>
                </form>
            </Fragment>
        );
    }
}
