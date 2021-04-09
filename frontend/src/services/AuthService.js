import {
  setAuthenticated,
  setIdToken,
  setProducts,
  setShops,
  setUserShops,
} from "../redux/actions";
import store from "../redux/store";
import firebase from "./firebase.config";

class AuthService {
  async signIn(user) {
    var [success, message] = [false, "Unable to sign in!"];
    await this.signInWithEmailAndPassword(user.email, user.password).then(
      (res) => {
        [success, message] = res;
      }
    );

    if (success) {
      const idToken = await this.getIdToken();
      store.dispatch(setAuthenticated(true));
      store.dispatch(setIdToken(idToken));
    }

    return [success, message];
  }

  async signOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        store.dispatch(setAuthenticated(false));
        store.dispatch(setIdToken(""));
        store.dispatch(setUserShops([]));
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  async createAccount(user) {
    var [success, message] = [false, "Unable to create an Account!"];
    await this.createAccountWithEmailAndPassword(
      user.email,
      user.password
    ).then((res) => {
      [success, message] = res;
    });

    if (success) {
      await this.updateUserName(user.name);
      const idToken = await this.getIdToken();
      store.dispatch(setAuthenticated(true));
      store.dispatch(setIdToken(idToken));
    }

    return [success, message];
  }

  async getIdToken() {
    var currentUser = firebase.auth().currentUser;
    if (currentUser !== null) {
      return await currentUser
        .getIdToken()
        .then((token) => {
          return token;
        })
        .catch((error) => {
          return false;
        });
    }
  }

  async createAccountWithEmailAndPassword(email, password) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return [true, "Account Successfully created!"];
      })
      .catch((error) => {
        return [false, error.message];
      });
  }

  async signInWithEmailAndPassword(email, password) {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        var message = "Welcome back " + res.user.displayName + "!";
        return [true, message];
      })
      .catch((error) => {
        return [false, error.message];
      });
  }

  async updateUserName(name) {
    var currentUser = firebase.auth().currentUser;
    if (currentUser !== null) {
      return await currentUser
        .updateProfile({ displayName: name })
        .then((res) => {
          return true;
        })
        .catch((error) => {
          return false;
        });
    }
  }
}

export default new AuthService();
