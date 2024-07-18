export default function CalculatorOverview({
    onChangeInput,
    numberStatesHandler,
}) {
    return (
        <div className="calculatorOverview">
            <div className="calculatorInput">
                <span>Start inleg (€)</span>
                <input
                    type="number"
                    value={numberStatesHandler.start}
                    onChange={(e) => onChangeInput("start", e.target.value)}
                    required
                />
            </div>
            <div className="calculatorInput">
                <span>Jaarlijkse inleg (€)</span>
                <input
                    type="number"
                    value={numberStatesHandler.annual}
                    onChange={(e) => onChangeInput("annual", e.target.value)}
                    required
                />
            </div>
            <div className="calculatorInput">
                <span>Verwachte rendement (in %)</span>
                <input
                    type="number"
                    value={numberStatesHandler.required}
                    onChange={(e) => onChangeInput("required", e.target.value)}
                    required
                />
            </div>
            <div className="calculatorInput">
                <span>Aantal jaren</span>
                <input
                    type="number"
                    value={numberStatesHandler.years}
                    onChange={(e) => onChangeInput("years", e.target.value)}
                    required
                />
            </div>
        </div>
    );
}
