import axios from "axios";

const api = axios.create({
  baseURL: "https://djbnrrib9e.execute-api.us-east-2.amazonaws.com/v1",
});

export default api;
