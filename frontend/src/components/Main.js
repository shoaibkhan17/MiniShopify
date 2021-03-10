import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import TopMenu from "./TopMenu";
import UserComponent from "./UserComponent";

var isAuthenticated = false;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.setAuthenticated = this.setAuthenticated.bind(this);
  }

  setAuthenticated(flag) {
    this.setState({ isAuthenticated: flag });
  }

  componentDidUpdate(prevProps, nextState) {
    console.log(
      "isAuthenticated",
      nextState.isAuthenticated,
      this.state.isAuthenticated
    );
  }

  // PrivateRoute = ({ component: Component, ...rest }) => {
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       fakeAuth.isAuthenticated === true ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect to="/login" />
  //       )
  //     }
  //   />;
  // };

  componentDidMount() {
    console.log("main mounting");
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/sign-in"
              exact
              component={() => (
                <SignIn setAuthenticated={this.setAuthenticated} />
              )}
            />

            <Route
              path="/create-account"
              component={() => (
                <CreateAccount setAuthenticated={this.setAuthenticated} />
              )}
            />

            <Route path="/home" component={() => <UserComponent />} />

            <Route
              render={() => {
                return this.state.isAuthenticated ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/sign-in" />
                );
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
