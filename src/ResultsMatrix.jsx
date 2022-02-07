import React from "react";
import propTypes from "prop-types";
import strings from "./strings";

function processRow(correct, incorrect, formula, minimumPoints) {
    const result = Math.max(0, formula(correct, incorrect));
    if (!isFinite(result))
        return <td key={`r${correct}_${incorrect}`}>{"//"}</td>;

    let trClass;
    if (Math.round(result) < minimumPoints) 
        trClass = "row-fail";
    else
        trClass = "row-success";


    return <td className={trClass} key={`r${correct}_${incorrect}`}>{result.toFixed(0)}</td>;
}

class ResultsMatrix extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            minimized: false
        };
    }

    handleMinimizeChange() {
        this.setState({
            minimized: !this.state.minimized
        });
    }

    calculateStartingPoint(formula, minimum, questionsNumber) {
        for (let correct = 0; correct < questionsNumber; correct++) {
            for (let given = 0; given < questionsNumber; given++) {
                if (given < correct)
                    continue;

                const incorrect = given - correct;

                if (formula(correct, incorrect) >= minimum) {
                    return [Math.max(0, given - 1), Math.max(0, correct - 1)];
                }

            }
        }

        return [0, 0];
    }
        
    render() {
        const {formula, minimumPoints, questionsNumber} = this.props;

        let heading = [];
            
        heading.push(<th scope="col" key="h#">#</th>);

        let rowStart;
        let colStart;

        if (this.state.minimized) {
            let [rs, cs] = this.calculateStartingPoint(formula, minimumPoints, questionsNumber);

            rowStart = rs;
            colStart = cs;
        } else {
            rowStart = 0;
            colStart = 0;
        }

        for (let i = rowStart; i <= questionsNumber; i++) {
            heading.push(
                <th scope="col" key={`h${i}`}>{i}</th>
            );
        }


        let matrix = [];

        for (let i = colStart; i <= questionsNumber; i++) {
            let row = [];
            row.push(<td key={`r${i}_h`}>{i}</td>);

            for (let j = rowStart; j <= questionsNumber; j++) {
                if (j <= i)
                    row.push(processRow(j, i - j, formula, minimumPoints));
                else
                    row.push(<td key={`r${j}_${j}`}>{"//"}</td>);
            }
            matrix.push(<tr key={`row${i}`}>{row}</tr>);
        }
        
        return (
            <>
                <label htmlFor="switch">
                    <input type="checkbox" id="extend-switch" name="extend-switch" role="switch" onChange={() => this.handleMinimizeChange()} />
                    {strings.minimizeSwitchLabel}
                </label>
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
            </>
        );
    }
}

ResultsMatrix.propTypes = {
    formula: propTypes.func,
    minimumPoints: propTypes.number,
    questionsNumber: propTypes.number,
    
};

export default ResultsMatrix;