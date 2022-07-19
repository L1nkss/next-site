import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

const container = document.getElementById("root");
if (container === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(container);

root.render(<App />)