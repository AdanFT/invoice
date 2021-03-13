import React from "react";
import { Redirect, Route, Switch } from "react-router";
import InvoiceForm from "../views/create";
import Invoices from "../views/table";

function InvoiceRouter() {
	return (
		<div>
			<Switch>
				<Route exact path="/invoices" component={Invoices} />
				<Route path="/invoices/create" component={InvoiceForm} />
				<Redirect to="/invoices" />
			</Switch>
		</div>
	);
}

export default InvoiceRouter;
