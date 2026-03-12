import axios from "axios";

const API = axios.create({
  baseURL: "https://backendbaguette02-production-1adf.up.railway.app/api/v1"
});

export default API;