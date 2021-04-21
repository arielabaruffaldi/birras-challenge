import { useState } from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);


    return {
        value,
        setValue,
        set: data => setValue(data),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
                value.toString();
            }
        }
    };
};