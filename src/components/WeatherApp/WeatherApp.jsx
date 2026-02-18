import React, { useState, useEffect } from "react";
import './WeatherApp.css';

const WeatherApp = () => {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

const iconMap = {
  "Partly cloudy": "/icons/partly-cloudy.png",
  "Sunny": "/icons/sunny.png",
  "Rain": "/icons/rain.png",
  "Overcast": "/icons/overcast.png",
};

  // 1️⃣ Obter localização do usuário com fallback
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocalização não suportada pelo navegador.");
      setCoords({ lat: -23.55052, lon: -46.633308 }); // fallback São Paulo
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        setError(
          "Erro ao obter localização. Talvez você precise permitir no navegador. Usando cidade padrão São Paulo."
        );
        setCoords({ lat: -23.55052, lon: -46.633308 }); // fallback São Paulo
      }
    );
  }, []);

  // 2️⃣ Buscar clima no wttr.in
  useEffect(() => {
    if (!coords.lat || !coords.lon) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://wttr.in/${coords.lat},${coords.lon}?format=j1`
        );
        const data = await response.json();
        setWeather({
          temp: data.current_condition[0].temp_C,
          desc: data.current_condition[0].weatherDesc[0].value,
          feelsLike: data.current_condition[0].FeelsLikeC,
          icon: data.current_condition[0].weatherIconUrl[0].value,
          city: data.nearest_area[0].areaName[0].value,
        });
      } catch (err) {
        setError("Erro ao buscar clima: " + err.message);
      }
    };

    fetchWeather();
  }, [coords]);

  if (error) return <div className="weather-card"><p>{error}</p></div>;
  if (!weather) return <div className="weather-card"><p>Carregando clima...</p></div>;

  return (
    <div className="weather-card">
      <h2 className="weather-city">{weather.city}</h2>
      <img 
        src={iconMap[weather.desc] || "/icons/default.png"} 
        alt={weather.desc} 
        className="weather-icon" 
      />
      <p className="weather-desc">{weather.desc}</p>
      <p className="weather-temp">🌡️ {weather.temp}°C</p>
      <p className="weather-feels">Sensação: {weather.feelsLike}°C</p>
    </div>
  );
};

export default WeatherApp;
