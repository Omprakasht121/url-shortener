import { apiClient } from "../../../shared/services/api-client";

export const urlApiCall = async (bigUrl) => {
  console.log("Sending big-url: ", bigUrl);
  try {
    const response = await apiClient.post('/short-url', { bigurl: bigUrl });
    return response;
  } catch (err) {
    console.log("Something went wrong in short-url API:", err);
    throw err;
  }
};
