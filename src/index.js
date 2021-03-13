import React from "react";
import ReactDOM from "react-dom";
import InvoiceRouter from "./routes";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<InvoiceRouter />
	</BrowserRouter>,
	document.getElementById("root")
);
