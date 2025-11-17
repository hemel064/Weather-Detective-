// ✅ Step 1: Tomar OpenWeatherMap API key ekhane boshabe
const API_KEY = "a043eb472d6676affd82e8d079452bcb";
const CITY = "Dhaka";

// Function to get weather
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("API key invalid or problem fetching data!");
        }
        const data = await response.json();
        console.log("🌤️ Weather Detective: Dhaka 🌤️");
        console.log("Temperature:", data.main.temp + " °C");
        console.log("Weather:", data.weather[0].description);
        console.log("Humidity:", data.main.humidity + "%");
        console.log("Wind Speed:", data.wind.speed + " m/s");
    } catch (error) {
        console.error(error.message);
    }
}

// Call the function
getWeather();
