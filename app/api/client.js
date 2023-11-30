import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://10.25.142.87:9000/api",
});

apiClient.addAsyncRequestTransform = async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
};

const get = apiClient.get;

// redefining the get function
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  // if data, simulate a succesfull response, otherwise return the original response
  // with information on why it failed
  return data ? { ok: true, data } : response;
};

export default apiClient;
