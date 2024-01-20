import ApiService from "./ApiService";

export async function apiLogin(data) {
  return await ApiService.fetchData({
    method: "post",
    url: "login",
    data: data,
  });
}

export async function apiRegister(data) {
  return await ApiService.fetchData({
    method: "post",
    url: "register",
    data: data,
  });
}
