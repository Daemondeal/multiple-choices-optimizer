import React from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/formula_parser");

wasm.then((m) => {
    ReactDOM.render(
        <>
            <h1>Hello World!</h1>
            <button onClick={() => {alert(m.add(2, 2));}}>Run test</button>
        </>,
        document.getElementById("root")
    );
});

