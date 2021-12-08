import axios from 'axios';


let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const URL= "https://api.openweathermap.org/data/2.5/weather";


const getWeather = async (
  city
) => {
  const response = await axios.get(
    `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  );
  return response.data;
};

export { getWeather };
