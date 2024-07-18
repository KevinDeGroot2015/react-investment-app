import Header from "./components/Header/header";
import CalculatorOverview from "./components/CalculatorOverview/CalculatorOverview";
import InterestListOverview from "./components/InterestListOverview/InterestListOverview";
import { useFilter } from "./hooks/useFilter";

export default function App() {
    const [numberStates, handleChange] = useFilter();

    return (
        <>
            <Header />
            <CalculatorOverview
                onChangeInput={handleChange}
                numberStatesHandler={numberStates}
            />
            {numberStates.years >= 1 && numberStates.years <= 100 ? (
                <InterestListOverview listValue={numberStates} />
            ) : (
                <p className="error">
                    Het aantal jaren moet minimaal 1 zijn, en maximaal 100.
                </p>
            )}
        </>
    );
}
