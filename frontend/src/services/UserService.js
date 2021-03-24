import axios from "axios";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://minishopifyapp.herokuapp.com/";

const USERS_REST_API_URL = endpoint + "api/merchants";
const CREATE_USER_REST_API_URL = endpoint + "api/addUser";
const AUTHENTICATE_REST_API_URL = endpoint + "api/authenticate";
const GET_ALL_SHOPS_URL = endpoint + "api/getShops";
const GET_SHOP_BY_ID_URL = endpoint + "api/getShopById";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL);
  }

  getShopById() {
    return axios.get(GET_SHOP_BY_ID_URL);
  }

  getShops() {
    return axios.get(GET_ALL_SHOPS_URL);
  }

  async createAccount(data) {
    return await axios.post(CREATE_USER_REST_API_URL, data).then(
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
    return await axios.post(AUTHENTICATE_REST_API_URL, data).then(
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
