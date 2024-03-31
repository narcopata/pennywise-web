/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";

import "non.geist";

import "./app.css";

// Import the generated route tree
import { App } from "_root/App";

// Render the app
const rootElement = document.getElementById("root");

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
