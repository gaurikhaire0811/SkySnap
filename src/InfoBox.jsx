import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox( {info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1759660024133-5008cae768e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL ="https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL ="https://images.unsplash.com/photo-1609686585289-93f559d33451?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
    <div className="InfoBox">
        <div className="container">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80
            ? (<ThunderstormIcon/>)
            : info.temp > 15
            ? (<WbSunnyIcon/>)
            :(< AcUnitIcon/>)
          }
        </Typography>
        <Typography variant="body2"  color="text.secondary"component= {"span"} >
        <p> Humidity = {info.humidity}</p>
        <p> Temprature = {info.temp}&deg;C</p>
        <p> MinTemp = {info.tempMax}&deg;C</p>
        <p> MaxTemp = {info.tempMin}&deg;C</p>
        <p> The Wether can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}





//https://images.unsplash.com/photo-1759660024133-5008cae768e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D