import React from 'react';

const Weather = (props) => (
    <div>
        { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
        { props.temperature && <p>Temperature: { props.temperature } K</p> }
        { props.high && <p>High: { props.high } K</p> }
        { props.low && <p>Low: { props.low } K</p> }
        { props.humidity && <p>Humidity: { props.humidity }</p> }
        { props.description && <p>Conditions: { props.description }</p> }
        { props.error && <p>{ props.error }</p> }
    </div>
);

export default Weather;