import React, { Component, Fragment } from "react";

export class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    {console.log(localStorage.getItem("userStatus"))}
                    <h1>my Profile</h1>
                    <p>status: you is singing in</p>
                </Fragment>
            </div>
        );
    }
}
