import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/LoginPage/Login";
import { NewsPage } from "./pages/News/News";
import { ProfilePage } from "./pages/profile/ProfilePage";

const history = createBrowserHistory();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(
        JSON.parse(localStorage.getItem("userStatus"))
    );
    return (
        <BrowserRouter history={history}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/userProfile">Profile Page</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route
                    path="/login"
                    render={routerProps => (
                        <Login setIsLoggedIn={setIsLoggedIn} {...routerProps} />
                    )}
                />
                <Route path="/news" component={NewsPage} />
                <Route path="/userProfile">
                    {isLoggedIn ? <ProfilePage /> : <Redirect to="/login" />}
                </Route>
            </div>
        </BrowserRouter>
    );
}
