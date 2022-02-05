import React from "react";
import propTypes from "prop-types";

function processRow(correct, incorrect, formula, minimumPoints) {
    const result = Math.max(0, formula(correct, incorrect));
    if (!isFinite(result))
        return <td key={`r${correct}_${incorrect}`}>N/A</td>;

    let trClass;
    if (Math.round(result) < minimumPoints) 
        trClass = "row-fail";
    else
        trClass = "row-success";


    return <td className={trClass} key={`r${correct}_${incorrect}`}>{result.toFixed(0)}</td>;
}

function TestStats({formula, minimumPoints, questionsNumber}) {
    if (formula == null)
        return <></>;

    let heading = [];
        
    heading.push(<th scope="col" key="h#">#</th>);

    for (let i = 0; i <= questionsNumber; i++) {
        heading.push(
            <th scope="col" key={`h${i}`}>{i}</th>
        );
    }


    let matrix = [];

    for (let i = 0; i <= questionsNumber; i++) {
        let row = [];
        row.push(<td key={`r${i}_h`}>{i}</td>);

        for (let j = 0; j <= questionsNumber; j++) {
            if (j <= i)
                row.push(processRow(j, i - j, formula, minimumPoints));
            else
                row.push(<td key={`r${j}_${i - j}`}>{"//"}</td>);
        }
        matrix.push(<tr key={`row${i}`}>{row}</tr>);
    }
    
    return <article>
        <figure>
            <table>
                <thead>
                    <tr>
                        {heading}
                    </tr>
                </thead>
                <tbody>
                    {matrix}
                </tbody>
            </table>
        </figure>
    </article>;
}

TestStats.propTypes = {
    formula: propTypes.func,
    minimumPoints: propTypes.number,
    questionsNumber: propTypes.number,
    
};

export default TestStats;