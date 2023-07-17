import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const key = '10251245-89f446d0cb8b565d1d225cbbb';

export async function getImages(userInput, page) {
  const searchParams = new URLSearchParams({
    per_page: 40,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page
  });
  
  try {
  const response = await axios.get(`${BASE_URL}?key=${key}&q=${userInput}&${searchParams}`);
  const images = await response.data;
  return images;

  } catch (error) {
    console.log(error.message);
  }
}

