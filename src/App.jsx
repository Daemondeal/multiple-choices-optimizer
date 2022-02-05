import React from "react";
import "./css/app.css";
import TestStats from "./testStats";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testFormula: null,
        };
    }

    render() {
        return (
            <>
                <header className="container" style={{"paddingTop": "var(--block-spacing-vertical)"}}>
                    <h1>Multiple Choices Optimizer</h1>
                </header>
    
                <main className="container">
                    <section id="form">
                        <article>
                            <h2>Test parameters</h2>
                            <form>
                                <div className="grid">
                                    Correct Answer Points
                                    <input type="text" id="correct-answers" name="correct-answers" placeholder="Correct" defaultValue="2" />
                                </div>
    
                                <div className="grid">
                                    Incorrect Answer Points Penalty
                                    <input type="text" id="incorrect-answers" name="incorrect-answers" placeholder="Incorrect" defaultValue="2/3" />
                                </div>

                                <div className="grid">
                                    Starting Points
                                    <input type="text" id="starting-points" name="starting-points" placeholder="Starting" defaultValue="0" />
                                </div>

                                <div className="grid">
                                    Questions Number
                                    <input type="text" id="questions-number" name="questions-number" placeholder="Questions" defaultValue="15" />
                                </div>

                                <div className="grid">
                                    Minimum Points
                                    <input type="text" id="minimum-points" name="minimum-points" placeholder="Minimum Points" defaultValue="30" />
                                </div>

                                <input type="submit" className="submit-calculation" value="Calculate" />
                            </form>
                        </article>
                    </section>
    
                    <section id="results">
                        <TestStats 
                            formula={(c, i) => c * 2 - (i * 2/3)}
                            questionsNumber={15}
                            minimumPoints={15}
                        />
                    </section>
                </main>
            </>
        );
    }
}
