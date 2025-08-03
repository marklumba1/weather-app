# Weather App

A responsive weather application built with **React**, **Tailwind CSS**, and the **OpenWeather API**. It allows users to search for any city or use their current location to get current weather and a 5-day forecast. If no city is entered and location is unavailable, the app defaults to **Manila**.

## Features

- Search weather by city name
- Automatically uses geolocation if available
- Falls back to Manila if location is unavailable
- Displays temperature, weather description, humidity, wind speed
- Shows sunrise and sunset times
- 5-day forecast view
- Responsive layout with Tailwind CSS
- Debounced search input
- Uses React Query for data caching and loading states

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Query
- OpenWeatherMap API

## Getting Started

1. Clone the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies
bash
Copy
Edit
npm install

3. Create .env file
Add your OpenWeather API key and base URL to a .env file in the root:
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.openweathermap.org/data/2.5
Refer to .env.example for reference.

4. Start the development server
npm run dev
Then open http://localhost:5173 in your browser.

### Build for Production
npm run build

### Project Structure
src/
├── api/                // API logic (fetch functions)
├── components/         // Reusable UI components
├── utils/              // Custom hooks and utilities
├── App.tsx             // Main component
├── main.tsx            // App entry point

### API Reference
This app uses OpenWeatherMap. You need to sign up and generate a free API key to use the weather data.
