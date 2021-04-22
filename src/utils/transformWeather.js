import { WiDaySunny } from "react-icons/wi";
import React from "react";

const TransformedWeather = (api_data, width, color) => {
    switch (api_data) {
        case 'Clear':
            return <WiDaySunny size={width} color={color} />
        default:
            return <WiDaySunny size={width} color={color} />
    }
}

export default TransformedWeather;