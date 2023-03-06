import { fetchHeader } from "./FetchHeader";

export const fetchApi = async (url) => {
    try {
      const response = await fetch(url, fetchHeader());
      const json = await response.json();
      return json;
    } 
    
    catch (error) {
      console.error(error);
      throw error;
    }
}
