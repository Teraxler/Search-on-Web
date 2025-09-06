import { API_KEY, API_URL, MAX_NUMBER_OF_IMAGES } from "./constant";

async function getSearchImages(query, page = 1) {
  console.log("🚀 ~ getSearchImages ~ page:", page);
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `${API_URL}/images?q=${query}&gl=ir&hl=fa&num=${MAX_NUMBER_OF_IMAGES}&page=${page}&apiKey=${API_KEY}`,
      requestOptions
    );
    const result = await response.json();

    return result.images;
  } catch (error) {
    console.error(error);
  }
}

export { getSearchImages };
