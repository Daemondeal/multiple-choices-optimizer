import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
    en: {
        title: "Multiple Choice Optimizer",

        english: "English",
        italian: "Italian",

        testParameters: "Test Parameters",
        correctPoints: "Correct Answer Points",
        incorrectPenalty: "Incorrect Answer Points Penalty",
        startingPoints: "Starting Points",
        questionsNumber: "Questions Number",
        minimumPoints: "Minimum Points",

        correctPointsPlaceholder: "Correct",
        incorrectPenaltyPlaceholder: "Incorrect",
        startingPointsPlaceholder: "Starting",
        questionsNumberPlaceholder: "Questions",
        minimumPointsPlaceholder: "Minimum",

        submitCalculations: "Calculate",

        bestStrategyExplaination: "By answering to {0} questions, {1} have to be right. Doing this you can pass the exam while only being correct on {2}% of the questions you answer.",

        minimizeSwitchLabel: "Minimize",

    },
    it: {
        title: "Multiple Choice Optimizer",
        
        english: "Inglese",
        italian: "Italiano",

        testParameters: "Parametri del test",
        correctPoints: "Punti di una risposta corretta",
        incorrectPenalty: "Penalità di una risposta errata",
        startingPoints: "Punti iniziali",
        questionsNumber: "Numero di domande",
        minimumPoints: "Minimo di punti per passare",

        correctPointsPlaceholder: "Punti",
        incorrectPenaltyPlaceholder: "Penalità",
        startingPointsPlaceholder: "Punti Iniziali",
        questionsNumberPlaceholder: "Domande",
        minimumPointsPlaceholder: "Minimo",

        submitCalculations: "Calcola",

        bestStrategyExplaination: "Dando {0} risposte, {1} devono esserne corrette . Così facendo, puoi passare l'esame con solo il {2}% delle risposte corrette.",
        

        minimizeSwitchLabel: "Minimizza",
    }
});

export default strings;