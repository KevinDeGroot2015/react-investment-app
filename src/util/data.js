export function calcDataResults({ start, annual, required, years }) {
    const annualData = [];
    let investmentValue = start;

    for (let i = 0; i < years; i++) {
        const interestEarnedInYear = investmentValue * (required / 100);
        investmentValue += interestEarnedInYear + annual;
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annual: annual,
        });
    }

    return annualData;
}

export const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
