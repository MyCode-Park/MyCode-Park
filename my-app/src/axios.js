import axios from "axios";

const instance = axios.create({
  baseURL: "...", // Api ( Cloud function )
});
export default instance;
