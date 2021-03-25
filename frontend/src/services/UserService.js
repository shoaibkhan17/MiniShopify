import axios from "axios";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://minishopifyapp.herokuapp.com/";

const CREATE_ACCOUNT_REST_API_URL = endpoint + "api/auth/createAccount";
const SIGN_IN_REST_API_URL = endpoint + "api/auth/signIn";
const GET_ALL_SHOPS_URL = endpoint + "api/shop/getShops";
const GET_SHOP_BY_ID_URL = endpoint + "api/getShopById";

class UserService {
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
    return await axios.post(SIGN_IN_REST_API_URL, data).then(
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
