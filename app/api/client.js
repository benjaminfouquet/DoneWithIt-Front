import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://127.0.0.1:9000/api",
});

const get = apiClient.get;

// redefining the get function
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log({ response });
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
