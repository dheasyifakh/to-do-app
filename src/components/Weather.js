import React,{useState, useEffect} from 'react'

const Weather = () => {
    const [weather, setWeather] = useState({});
    const api = {
        key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    useEffect(()=>{
        fetch(`${api.base}weather?q=Jakarta&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            console.log(result);
          });
    },[])

    var weathers = []
    if(typeof weather == 'object'){
        weathers= weather
      }
      console.log(weathers)
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }
  return (
    <div className="row">
        <div className="col-6">
            <h1 style={{fontSize: '5rem'}}>
                {weather && weather.main && weather.main.temp
                ? Math.round(weather.main.temp) + '°c'
                : 'Loading...'}
            </h1>
            <span style={{marginLeft: "4rem"}}>
                {weather && weather.main && weather.weather[0].main
                ? weather.weather[0].main
                : 'Loading...'}
            </span>
           
            
        </div>
        <div className="col-6 mt-5">
            <div className="location">
                {weathers && weathers?.name ? weathers.name : 'Loading'}, {weathers && weathers.sys && weathers.sys.country ? weathers.sys.country : 'Loading...'}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
    </div>
  )
}

export default Weather