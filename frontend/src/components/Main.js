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
import UserComponent from "./UserComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { isAuthenticated: state.isAuthenticated };
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, nextState) {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/sign-in" exact component={() => <SignIn />} />

            <Route path="/create-account" component={() => <CreateAccount />} />

            <Route
              path="/home"
              component={() =>
                this.props.isAuthenticated ? (
                  <UserComponent />
                ) : (
                  <Redirect to="/sign-in" />
                )
              }
            />

            <Route
              render={() => {
                return this.props.isAuthenticated ? (
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

export default connect(mapStateToProps, {})(Main);
