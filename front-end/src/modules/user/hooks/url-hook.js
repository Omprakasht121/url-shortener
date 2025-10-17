import { urlApiCall } from "../api/url-api";

export const useUrl = () => {
  const doSubmit = async (inputUrl) => {
    try {
      const response = await urlApiCall(inputUrl);
      return response?.data?.shortUrl || null;
    } catch (error) {
      console.log("URL Hook Error:", error);
      return null;
    }
  };

  return { doSubmit };
};
