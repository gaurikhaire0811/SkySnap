 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
 import {useState} from "react";
 import "./Search.css";                        

export default function Search({ updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f5e4024dc5389f05631bc26148d26137";

  let getWetherInfo = async () => {
    try {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    
     let result = {
      city:city,
     	temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
	    tempMax: jsonResponse.main.temp_max,
	    humidity: jsonResponse.main.humidity,
	    feelsLike: jsonResponse.main.feels_like,
	    weather: jsonResponse.weather[0].description,
     };
    console.log(result);
    return result;
    
    } catch(err) {
      throw err;
      // setError("No such place in our API");
    }
	 };

  
   let handleChange = (evt) => {      
      setCity(evt.target.value);
   };

  let handleSubmit =  async (event) => {
    try {
      event.preventDefault();
      setError(false);
    console.log(city);
    setCity("");
     await getWetherInfo();
     let newInfo = await getWetherInfo();
     updateInfo(newInfo);
    } catch(err) {
      setError(true);
    }

  };

  return (
    <div className="Search" >
        <form onSubmit={handleSubmit}>
         <TextField id="city"
          label="City Name" 
          variant="outlined" 
          required 
          value={city}  
          onChange={handleChange}/>
         <br></br>
         <br></br>

         <Button variant="contained" type="submit"> Search </Button>
         {error && <p style={{color:"red"}}>No such Place exists!</p>}
        </form> 
    </div>
  );
}