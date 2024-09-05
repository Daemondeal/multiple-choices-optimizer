import React from "react";
import propTypes from "prop-types";
import ResultsMatrix from "./ResultsMatrix";
import strings from "./strings";


function getBestChances(formula, minimumPoints, questionsNumber) {
    let results = [];

    for (let questionsGiven = 0; questionsGiven <= questionsNumber; questionsGiven++ ) {
        for (let correct = 0; correct <= questionsGiven; correct++) {
            const incorrect = questionsGiven - correct;
            const result = formula(correct, incorrect);

            if (Math.round(result) >= minimumPoints) {
                results.push({
                    questionsGiven, 
                    correct, 
                    correctRatio: correct / questionsGiven, 
                    result
                });
                break;
            }
        }
    }

    let min = results[0];
    console.log(results);

    for (let res of results) {
        if (res.correctRatio < min.correctRatio) 
            min = res;
    }
    
    return min;
}

function TestStats({formula, minimumPoints, questionsNumber}) {
    if (formula == null)
        return <></>;

    return (
        <article>
            <ul>
                <li>{strings.matrixExplainationRows}</li>
                <li>{strings.matrixExplainationCols}</li>
                <li>{strings.matrixExplainationCell}</li>
            </ul>
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
