import { calcDataResults, formatter } from "../../util/data";

export default function InterestListOverview({ listValue }) {
    const endData = calcDataResults(listValue);
    const initialInvestment =
        endData[0].valueEndOfYear - endData[0].interest - endData[0].annual;

    return (
        <div className="interestListOverview">
            <table className="result">
                <thead>
                    <tr>
                        <th>Jaar</th>
                        <th>Start waarde</th>
                        <th>Rente</th>
                        <th>Eindwaarde</th>
                        <th>Eind rente</th>
                    </tr>
                </thead>
                <tbody>
                    {endData.map((item) => {
                        const totalInterest =
                            item.valueEndOfYear - item.annual * item.year;

                        return (
                            <tr key={item.year}>
                                <td>{item.year}</td>
                                <td>
                                    {formatter.format(
                                        item.valueEndOfYear - item.interest
                                    )}
                                </td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>
                                    {formatter.format(
                                        totalInterest - initialInvestment
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
