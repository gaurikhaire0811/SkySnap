import Search from "./Search";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Pune",
        feelsLike: 30.03,
        humidity: 31,
        temp: 31.19,
        tempMax: 31.19,
        tempMin: 28.56,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
   return (
    <div style={{textAlign: "center"}}>
        <h2> SkySnap </h2>
        <Search updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
   );
}