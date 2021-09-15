import axios from "axios";

const instance = axios.create({
  // API to the cloud
  baseURL: "http://localhost:5001/velaanmaiam/us-central1/api",
});
export default instance;
