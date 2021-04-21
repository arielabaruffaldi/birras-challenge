import { WiDaySunny } from "react-icons/wi";
import React from "react";

const TransformedWeather = (api_data, width) => {
    switch (api_data) {
        case 'Clear':
            return <WiDaySunny size={width} color="#01A3FF" />
    }
}

export default TransformedWeather;