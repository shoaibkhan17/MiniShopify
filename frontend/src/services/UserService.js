import axios from "axios";
import firebase from "./firebase.config";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://minishopifyapp.herokuapp.com/";

const CREATE_ACCOUNT_REST_API_URL = endpoint + "api/auth/createAccount";
const SIGN_IN_REST_API_URL = endpoint + "api/auth/signIn";
const GET_ALL_SHOPS_URL = endpoint + "api/shop/getShops";
const CREATE_SHOP_URL = endpoint + "api/shop/createShop";
const GET_SHOP_BY_ID_URL = endpoint + "api/getShopById";

const POST_REQUEST_CONFIG_DEFAULT = {
  headers: {
    "Content-Type": "application/json",
  },
};

const SIGN_IN_DATA = {
  data: { provider: "GOOGLE" },
};

let idTokenTest;

class UserService {
  async updateUserName(name) {
    var currentUser = firebase.auth().currentUser;
    if (currentUser !== null) {
      await currentUser.updateProfile({ displayName: name }).then((res) => {
        return true;
      });
    }
    return false;
  }

  async test(data) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        test = this.updateUserName(data.name);
        console.log("updated name: " + test);
        // console.log(res);
        // var currentUser = firebase.auth().currentUser;
      });
    // return await axios
    //   .post(CREATE_ACCOUNT_REST_API_URL, data, POST_REQUEST_CONFIG_DEFAULT)
    //   .then((res) => {
    //     console.log("MY JWT: " + res.data);
    //     return firebase
    //       .auth()
    //       .signInWithCustomToken(res.data)
    //       .then(async (resp) => {
    //         console.log("response from sign in: " + resp);
    //         return await resp.user.getIdToken().then((idToken) => {
    //           console.log("my id token: " + idToken);
    //           idTokenTest = idToken;
    //           // return Promise.resolve();
    //         });
    //       })
    //       .catch(function (error) {
    //         console.log("shit happened sadly");
    //         return Promise.reject(false);
    //       });
    //   });
  }

  async signIn(idToken, user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + idToken,
      },
      withCredentials: true,
    };
    return await axios
      .post(SIGN_IN_REST_API_URL, SIGN_IN_DATA, config)
      .then((res) => {
        console.log("signInWithUserID: " + res.data);
        return Promise.resolve({ success: true, user });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
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

  async createAccount(data) {
    return await axios.post(CREATE_ACCOUNT_REST_API_URL, data).then(
      (response) => {
        if (response && response.data) {
          return [
            response.data.authenticate && response.data.userAdded,
            response.data.message,
          ];
        }
        return [false, "Unable to create an account!"];
      },
      (error) => {
        return [false, "Unable to create an account!"];
      }
    );
  }

  async authenticateMerchant(data) {
    return await axios
      .post(SIGN_IN_REST_API_URL, data, POST_REQUEST_CONFIG_DEFAULT)
      .then(
        (response) => {
          if (response && response.data) {
            return response.data.authenticate;
          }
          return false;
        },
        (error) => {
          return false;
        }
      );
  }
}

export default new UserService();
