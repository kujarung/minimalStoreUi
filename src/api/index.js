import axios from "axios";
const DOMAIN = process.env.NODE_ENV === "development" ? "http://localhost:8000/api" : '/api';

const api = async (method, url, data) => {
  console.log(process.env.NODE_ENV )
  if(method === "get") {
    const res = await axios({
      method,
      url: DOMAIN + url,
      params : data
    });
    return res.data;
  } else {
    const res = await axios({
      method,
      url: DOMAIN + url,
      data
    });
    return res.data;
  }
};

window.api = api;
export default api;
