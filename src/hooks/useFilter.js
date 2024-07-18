import { useCallback, useState } from "react";

export function useFilter() {
    const initialValue = {
        start: 500,
        annual: 100,
        required: 4,
        years: 10,
    };

    const [numberStates, setNumberstates] = useState(initialValue);

    const handleChange = useCallback((name, newValue) => {
        setNumberstates((prevNumberstate) => {
            return {
                ...prevNumberstate,
                [name]: +newValue,
            };
        });
    }, []);

    return [numberStates, handleChange];
}
