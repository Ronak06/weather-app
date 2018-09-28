import React from 'react';

const Weather = (props) => (
    <div>
        { props.city && props.country && <p id="location">Location: { props.city }, { props.country }</p> }
        { props.temperature && <p id="temperature">Temperature: { props.temperature } K</p> }
        { props.high && <p id="high">High: { props.high } K</p> }
        { props.low && <p id="low">Low: { props.low } K</p> }
        { props.humidity && <p id="humidity">Humidity: { props.humidity }</p> }
        { props.description && <p id="conditions">Conditions: { props.description }</p> }
        { props.error && <p id="error">{ props.error }</p> }
    </div>
);

export default Weather;