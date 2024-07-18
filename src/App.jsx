import { useState } from "react";
import Header from "./components/Header/header";
import CalculatorOverview from "./components/CalculatorOverview/CalculatorOverview";
import InterestListOverview from "./components/InterestListOverview/InterestListOverview";

function App() {
    const [numberStates, setNumberstates] = useState({
        start: 500,
        annual: 100,
        required: 4,
        years: 10,
    });

    const validChecker = numberStates.years >= 1 && numberStates.years <= 100;

    function handleChange(item, newValue) {
        setNumberstates((prevNumberstate) => {
            return {
                ...prevNumberstate,
                [item]: +newValue,
            };
        });
    }
    return (
        <>
            <Header />
            <CalculatorOverview
                onChangeInput={handleChange}
                numberStatesHandler={numberStates}
            />
            {validChecker ? (
                <InterestListOverview listValue={numberStates} />
            ) : (
                <p className="error">
                    Het aantal jaren moet minimaal 1 zijn, en maximaal 100.
                </p>
            )}
        </>
    );
}

export default App;
