import axios from "axios";
import {
  deleteShop,
  setShops,
  setProducts,
  updateProduct,
  deleteProduct,
  updateShop,
  addProduct,
  createShop,
} from "../redux/actions";
import store from "../redux/store";

var endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://minishopifyapp.herokuapp.com/";

// Public end points
const GET_ALL_SHOPS_URL = endpoint + "api/shop/getShops";
const GET_SHOP_BY_ID_URL = endpoint + "api/getShopById";
const GET_SHOP_PRODUCTS = endpoint + "api/shop/getProducts";

// Protected end points
const CREATE_SHOP_URL = endpoint + "api/shop/protected/createShop";
const DELETE_SHOP_URL = endpoint + "api/shop/protected/deleteShop";
const UPDATE_SHOP_URL = endpoint + "api/shop/protected/updateShop";

const UPDATE_PRODUCT_URL = endpoint + "api/shop/protected/updateProduct";
const DELETE_PRODUCT_URL = endpoint + "api/shop/protected/deleteProduct";
const ADD_PRODUCT_URL = endpoint + "api/shop/protected/addProduct";

class ShopService {
  getHeaders() {
    const config = {
      headers: {
        "X-Firebase-Auth": store.getState().idToken,
      },
    };
    return config;
  }

  async createShop(createdShop) {
    var config = this.getHeaders();

    return axios
      .post(CREATE_SHOP_URL, createdShop, config)
      .then((res) => {
        if (res.data !== null && res.data !== "") {
          store.dispatch(createShop(res.data));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  async getAllShops() {
    return axios
      .get(GET_ALL_SHOPS_URL)
      .then((res) => {
        store.dispatch(setShops(res.data));
        return res.data;
      })
      .catch((error) => {
        return null;
      });
  }

  async getShopProducts(shopID) {
    const url = GET_SHOP_PRODUCTS + "/" + shopID;
    return axios
      .get(url)
      .then((res) => {
        store.dispatch(setProducts(res.data));
        return res.data;
      })
      .catch((error) => {
        return null;
      });
  }

  async deleteShop(shopID) {
    var config = this.getHeaders();

    return axios
      .post(DELETE_SHOP_URL, shopID, config)
      .then((res) => {
        if (res.data) {
          store.dispatch(deleteShop(shopID));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  async deleteProduct(productID) {
    var config = this.getHeaders();

    return axios
      .post(DELETE_PRODUCT_URL, productID, config)
      .then((res) => {
        if (res.data) {
          store.dispatch(deleteProduct(productID));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  async updateShop(updatedShop) {
    var config = this.getHeaders();

    return axios
      .post(UPDATE_SHOP_URL, updatedShop, config)
      .then((res) => {
        if (res.data !== null) {
          store.dispatch(updateShop(updatedShop));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  async updateProduct(updatedProduct) {
    var config = this.getHeaders();

    return axios
      .post(UPDATE_PRODUCT_URL, updatedProduct, config)
      .then((res) => {
        if (res.data !== null && res.data !== "") {
          store.dispatch(updateProduct(updatedProduct));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  async addNewProduct(productAdded) {
    var config = this.getHeaders();

    return axios
      .post(ADD_PRODUCT_URL, productAdded, config)
      .then((res) => {
        if (res.data !== null && res.data !== "") {
          store.dispatch(addProduct(productAdded));
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  getShopById() {
    return axios.get(GET_SHOP_BY_ID_URL);
  }
}

export default new ShopService();
