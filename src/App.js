import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "f55fbb38bc222d84aa979f488871d9f7";

class App extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        const data = await api_call.json();

    }

    render() {
        return(
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;