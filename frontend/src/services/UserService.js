import axios from "axios";
import store from "../redux/store";
import firebase from "./firebase.config";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://minishopifyapp.herokuapp.com/";

const GET_ALL_SHOPS_URL = endpoint + "api/shop/getShops";
const CREATE_SHOP_URL = endpoint + "api/shop/createShop";
const GET_SHOP_BY_ID_URL = endpoint + "api/getShopById";

let idTokenTest;

class UserService {
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
      store.getState().idToken = idToken;
    }

    return [success, message];
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
        return [false, error];
      });
  }

  async signIn(user) {
    var [success, message] = [false, "Unable to sign in!"];
    await this.signInWithEmailAndPassword(user.email, user.password).then(
      (res) => {
        [success, message] = res;
      }
    );

    if (success) {
      const idToken = await this.getIdToken();
      store.getState().idToken = idToken;
    }

    return [success, message];
  }

  async createShop() {
    console.log("MY ID TOKEN: " + idTokenTest);

    const config = {
      headers: {
        "X-Firebase-Auth": "",
      },
    };

    axios.post(CREATE_SHOP_URL, null, config).then((response) => {
      console.log(response.data);
    });
  }

  async getAllShops() {
    return axios
      .get(GET_ALL_SHOPS_URL)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return null;
      });
  }

  getShopById() {
    return axios.get(GET_SHOP_BY_ID_URL);
  }
}

export default new UserService();
