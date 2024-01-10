import ApiService from "./ApiService";

export async function exampleGet() {
  return await ApiService.fetchData({
    method: "get",
    url: "users",
  });
}

export async function examplePost(data) {
  return await ApiService.fetchData({
    method: "get",
    url: "users",
    data,
  });
}
