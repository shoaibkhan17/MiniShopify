import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/merchants';
const CREATE_USER_REST_API_URL = 'http://localhost:8080/api/addMerchant';
const AUTHENTICATE_REST_API_URL = 'http://localhost:8080/api/authenticate';

class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }

    createAccount(data) {
        axios.post(CREATE_USER_REST_API_URL, data)
    }

    authenticateMerchant(data) {
        axios.post(AUTHENTICATE_REST_API_URL, data)
    }
}

export default new UserService();