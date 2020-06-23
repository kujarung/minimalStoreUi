import axios from "axios";
import store from "@/store"
const DOMAIN = process.env.NODE_ENV === "development" ? "http://localhost:8080/api" : '/api';

const api = async (method, url, data, header) => {
  store.commit("addLoading")
  if(method === "get") {
    try {
      const res = await axios({
        method,
        url: DOMAIN + url,
        params : data
      });
      store.commit("removeLoading");
      return res;
    } catch(error) {
      store.commit("removeLoading")
    }
    store.commit("removeLoading")
  } else {
    try {
      console.log(header)
      axios.defaults.headers.common['Authorization'] = header
      const res = await axios({
        method,
        url: DOMAIN + url,
        data,
      });
      store.commit("removeLoading")
      return res;
    } catch(error) {
      store.commit("removeLoading")
    }
  }
};

window.api = api;
export default api;
