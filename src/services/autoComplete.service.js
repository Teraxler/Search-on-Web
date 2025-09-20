import { API_KEY, API_URL } from "./constant";

async function getAutoCompeleteSuggestions(query) {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `${API_URL}/autocomplete?q=${query}&gl=ir&apiKey=${API_KEY}`,
      requestOptions
    );
    const result = await response.json();
    return result.suggestions;
  } catch (error) {
    console.error(error);
  }
}

export { getAutoCompeleteSuggestions };
