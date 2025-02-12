const apiKey = "1fa297733ac3687df3b1444c858dacec"; 

const getWeather2 = async (city = null, lat = null, lon = null) => {
  try {
    let url = "";

    if (city) {
      // Fetch weather by city name
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    } else if (lat !== null && lon !== null) {
      // Fetch weather by latitude & longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    } else {
      throw new Error("No city or location coordinates provided.");
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City or location not found (${response.status})`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null in case of an error
  }
};

export default getWeather2;
