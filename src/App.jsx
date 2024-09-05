import React from "react";
import "./css/app.css";
import TestStats from "./TestStats";
import strings from "./strings";
import { setTheme, setLanguage, initSettings } from "./settings";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        initSettings();

        this.state = {
            testFormula: null,
            minimumPoints: null,
            questionsNumber: null,
        };
    }

    createLanguageHandler(lang) {
        return (e) => {
            e.preventDefault();
            setLanguage(lang);
            this.forceUpdate();
        };
    }

    createThemeHandler(theme) {
        return (e) => {
            e.preventDefault();
            setTheme(theme);
            this.forceUpdate();
        };
    }

    validateFractionInput(event, selector) {
        const target = event.target[selector];
        const rawText = target.value;
        const validationRegex = /^[0-9./]*$/;

        if (!rawText.match(validationRegex)) {
            target.setAttribute("aria-invalid", "true");
            return null;
        }

        if (rawText.indexOf("/") !== -1) {
            const fraction = rawText.split("/");

            if (fraction.length > 2) {
                target.setAttribute("aria-invalid", "true");
                return null;
            }

            target.removeAttribute("aria-invalid");
            
            return parseFloat(fraction[0]) / parseFloat(fraction[1]);
        } else {

            target.removeAttribute("aria-invalid");
            return parseFloat(rawText);
        }
    }

    validateIntegerInput(event, selector) {
        const target = event.target[selector];
        const rawText = target.value;
        const validationRegex = /^[0-9]*$/;

        if (!rawText.match(validationRegex)) {
            target.setAttribute("aria-invalid", "true");
            return null;
        }

        target.removeAttribute("aria-invalid");
        return parseInt(rawText);

    }

    handleSubmit(event) {
        event.preventDefault();

        const correctPoints = this.validateFractionInput(event, "correct-answers");
        const incorrectPenalty = this.validateFractionInput(event, "incorrect-answers");
        const startingPoints = this.validateFractionInput(event, "starting-points");
        const minimumPoints = this.validateFractionInput(event, "minimum-points");
        const questionsNumber = this.validateIntegerInput(event, "questions-number");

        const verificationArray = [
            correctPoints,
            incorrectPenalty,
            startingPoints,
            minimumPoints,
            questionsNumber
        ];

        for (let element of verificationArray)
            if (element === null)
                return;

        const testFormula = (function(correct, incorrect) {
            return startingPoints + correct * correctPoints - incorrect * incorrectPenalty;
        });

        this.setState({
            testFormula,
            minimumPoints,
            questionsNumber,
        });
    }

    render() {
        const { testFormula, questionsNumber, minimumPoints } = this.state;


        return (
            <>
                <nav className="container-fluid">
                    <ul>
                        <li>{strings.title}</li>
                        <li>|</li>
                        <li><a href="#" className="contrast" onClick={this.createLanguageHandler("en")}>{strings.english}</a></li>
                        <li><a href="#" className="contrast" onClick={this.createLanguageHandler("it")}>{strings.italian}</a></li>
                    </ul>

                    <ul>
                        <li><a href="#" className="contrast" onClick={this.createThemeHandler("light")}>Light</a></li>
                        <li><a href="#" className="contrast" onClick={this.createThemeHandler("dark")}>Dark</a></li>
                    </ul>
                </nav>
    
                <main className="container">
                    <section id="form">
                        <article>
                            <h2>{strings.testParameters}</h2>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="grid">
                                    {strings.correctPoints}
                                    <input type="text" id="correct-answers" name="correct-answers" placeholder={strings.correctPointsPlaceholder} defaultValue="2" />
                                </div>
    
                                <div className="grid">
                                    {strings.incorrectPenalty}
                                    <input type="text" id="incorrect-answers" name="incorrect-answers" placeholder={strings.incorrectPenaltyPlaceholder} defaultValue="2/3" />
                                </div>

                                <div className="grid">
                                    {strings.startingPoints}
                                    <input type="text" id="starting-points" name="starting-points" placeholder={strings.startingPointsPlaceholder} defaultValue="0" />
                                </div>

                                <div className="grid">
                                    {strings.questionsNumber}
                                    <input type="number" id="questions-number" name="questions-number" placeholder={strings.questionsNumberPlaceholder} defaultValue="15" />
                                </div>

                                <div className="grid">
                                    {strings.minimumPoints}
                                    <input type="text" id="minimum-points" name="minimum-points" placeholder={strings.minimumPointsPlaceholder} defaultValue="15" />
                                </div>

                                <input type="submit" className="submit-calculation" value={strings.submitCalculations} />
                            </form>
                        </article>
                    </section>
    
                    <section id="results">
                        <TestStats 
                            formula={testFormula}
                            questionsNumber={questionsNumber}
                            minimumPoints={minimumPoints}
                        />
                    </section>
                </main>
            </>
        );
    }
}
