import index from "../services/index";

const ApiService = {
  fetchData(param) {
    return new Promise((resolve, reject) => {
      index(param)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default ApiService;
