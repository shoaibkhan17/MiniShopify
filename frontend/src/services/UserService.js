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

  async createAccount(data) {
    var [success, message] = [false, "Unable to create an Account!"];
    await this.createAccountWithEmailAndPassword(
      data.email,
      data.password
    ).then((res) => {
      [success, message] = res;
    });

    if (success) {
      await this.updateUserName(data.name);
      const idToken = await this.getIdToken();
      store.getState().idToken = idToken;
      console.log("set id token" + idToken);
    }

    return [success, message];
  }

  // async signIn(idToken, user) {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + idToken,
  //     },
  //     withCredentials: true,
  //   };
  //   return await axios
  //     .post(SIGN_IN_REST_API_URL, SIGN_IN_DATA, config)
  //     .then((res) => {
  //       console.log("signInWithUserID: " + res.data);
  //       return Promise.resolve({ success: true, user });
  //     })
  //     .catch((error) => {
  //       return Promise.reject(error);
  //     });
  // }

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

  async getShop() {
    axios.get(GET_ALL_SHOPS_URL).then((res) => {
      console.log(res.data);
    });
  }

  getShopById() {
    return axios.get(GET_SHOP_BY_ID_URL);
  }

  getShops() {
    return axios.get(GET_ALL_SHOPS_URL);
  }
}

export default new UserService();
