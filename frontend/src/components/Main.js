import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import Home from "./Home";
import { connect } from "react-redux";
import Product from "./Product";
import ShopProducts from "./product/ShopProducts";

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

            <Route
              path="/create-account"
              exact
              component={() => <CreateAccount />}
            />

            <Route path="/home" exact component={() => <Home />} />

            <Route path="/shop/:shopID" component={ShopProducts} />

            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Main);
