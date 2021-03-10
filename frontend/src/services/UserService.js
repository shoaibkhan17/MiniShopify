import axios from "axios";

const USERS_REST_API_URL = "/api/merchants";
const CREATE_USER_REST_API_URL = "/api/addMerchant";
const AUTHENTICATE_REST_API_URL = "/api/authenticate";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL);
  }

  async createAccount(data) {
    return await axios.post(CREATE_USER_REST_API_URL, data).then(
      (response) => {
        if (response && response.data) {
          return response.data.authenticate && response.data.merchantAdded;
        }
        return false;
      },
      (error) => {
        return false;
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
