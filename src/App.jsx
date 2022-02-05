import React from "react";
import "./css/app.css";
import TestStats from "./testStats";
import strings from "./strings";
import { setTheme, setLanguage, initSettings } from "./settings";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        initSettings();

        this.state = {
            testFormula: null,
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

    render() {
        return (
            <>
                <nav className="container-fluid">
                    <ul>
                        <li><a href="#" className="contrast" onClick={this.createLanguageHandler("en")}>{strings.english}</a></li>
                        <li><a href="#" className="contrast" onClick={this.createLanguageHandler("it")}>{strings.italian}</a></li>
                    </ul>

                    <ul>
                        <li><a href="#" className="contrast" onClick={this.createThemeHandler("light")}>Light</a></li>
                        <li><a href="#" className="contrast" onClick={this.createThemeHandler("dark")}>Dark</a></li>
                    </ul>
                </nav>
                <header className="container" style={{"paddingTop": "var(--block-spacing-vertical)"}}>
                    <h1>{strings.title}</h1>
                </header>
    
                <main className="container">
                    <section id="form">
                        <article>
                            <h2>{strings.testParameters}</h2>
                            <form>
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
                                    <input type="text" id="questions-number" name="questions-number" placeholder={strings.questionsNumberPlaceholder} defaultValue="15" />
                                </div>

                                <div className="grid">
                                    {strings.minimumPoints}
                                    <input type="text" id="minimum-points" name="minimum-points" placeholder={strings.minimumPointsPlaceholder} defaultValue="30" />
                                </div>

                                <input type="submit" className="submit-calculation" value={strings.submitCalculations} />
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
