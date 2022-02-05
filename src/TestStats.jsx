import React from "react";
import propTypes from "prop-types";
import ResultsMatrix from "./ResultsMatrix";

function TestStats({formula, minimumPoints, questionsNumber}) {
    if (formula == null)
        return <></>;

    return (
        <article>
            <ResultsMatrix
                formula={formula}
                minimumPoints={minimumPoints}
                questionsNumber={questionsNumber}
            />
        </article>
    );
}

TestStats.propTypes = {
    formula: propTypes.func,
    minimumPoints: propTypes.number,
    questionsNumber: propTypes.number,
    
};

export default TestStats;