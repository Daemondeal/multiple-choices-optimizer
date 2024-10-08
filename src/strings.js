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

        matrixExplainationRows: "Rows: number of questions left blank.",
        matrixExplainationCols: "Columns: number of questions answered correctly.",
        matrixExplainationCell: "Cells: final score.",

        submitCalculations: "Calculate",

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

        matrixExplainationRows: "Righe: numero di domande lasciate in bianco.",
        matrixExplainationCols: "Colonne: numero di domande risposte correttamente.",
        matrixExplainationCell: "Celle: punteggio raggiunto.",

        correctPointsPlaceholder: "Punti",
        incorrectPenaltyPlaceholder: "Penalità",
        startingPointsPlaceholder: "Punti Iniziali",
        questionsNumberPlaceholder: "Domande",
        minimumPointsPlaceholder: "Minimo",

        submitCalculations: "Calcola",

        minimizeSwitchLabel: "Minimizza",
    }
});

export default strings;
