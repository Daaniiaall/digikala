import axios from "axios";

const dkApi = axios.create({
  baseURL: "https://api.one-api.ir/digikala/v1",
  headers: {
    Accept: "application/json",
    "one-api-token": "688605:670641b42f01a",
  },
});

dkApi.interceptors.request.use(
  function (request: any) {
    return request;
  },
  function (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
);

dkApi.interceptors.response.use(
  function (response: { data: any; }) {
    return response.data;
  },
  function (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
);

// export default dkApi;
