import axios from "axios";
const DOMAIN = "http://localhost:3000";

const minimalStoreApi = async (method, url, params) => {
  const { data } = await axios({
    method,
    url: DOMAIN + url,
    params
  });
  return data;
};

window.minimalStoreApi = minimalStoreApi;
export default minimalStoreApi;
