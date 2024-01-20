import axios from "axios";
import appConfig from "../configs/appConfig";
import store from "../store";
import { setSignInSuccess } from "../store/auth/sessionSlice";

const unAuthenticateCode = ["403"];

const api = axios.create({
  timeout: 10000,
  baseURL: appConfig.apiPrefix,
});

api.interceptors.request.use(
  (config) => {
    const stateData = store.getState();

    if (stateData.session.token !== "") {
      config.headers[
        "Authorization"
      ] = `${appConfig.tokenType} ${stateData.session.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;

    if (unAuthenticateCode.includes(response.status)) {
      return store.dispatch(setSignInSuccess());
    }

    return Promise.reject(error);
  }
);

export default api;
