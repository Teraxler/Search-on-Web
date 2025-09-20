import { API_KEY, API_URL, MAX_NUMBER_RESULT } from "./constant";

async function getSearchResult(query, page = 1) {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `${API_URL}/search?q=${query}&gl=ir&hl=fa&num=${MAX_NUMBER_RESULT}&page=${page}&apiKey=${API_KEY}`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export { getSearchResult };
