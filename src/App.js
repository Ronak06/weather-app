import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "f55fbb38bc222d84aa979f488871d9f7";
const kelvinToCelsius = require('kelvin-to-celsius');
const wConditions = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 
'shower rain', 'rain', 'thunderstorm', 'snow', 'mist'];

class App extends React.Component {
    state = {
        temperature: undefined,
        high: undefined,
        low: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();

        if(city && country) {
            this.setState({
                temperature: kelvinToCelsius(data.main.temp),
                high: kelvinToCelsius(data.main.temp_max),
                low: kelvinToCelsius(data.main.temp_min),
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                high: undefined,
                low: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a city and country in the textboxes above."
            });
        }
    }

    render() {
        return(
            <div>
                <Titles />

                <Form getWeather={this.getWeather}/>
                
                <Weather 
                temperature={this.state.temperature}
                high={this.state.high}
                low={this.state.low}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
            </div>
        );
    }
}

export default App;