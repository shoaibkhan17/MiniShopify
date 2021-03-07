import axios from 'axios'

const USERS_REST_API_URL = '/api/merchants';
const CREATE_USER_REST_API_URL = '/api/addMerchant';
const AUTHENTICATE_REST_API_URL = '/api/authenticate';

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