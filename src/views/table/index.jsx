import React from "react";
import { Link } from "react-router-dom";
import { Grid, Dropdown, Button, Header, Divider, Container, Pagination } from "semantic-ui-react";
import InvoiceCard from "../../components/card";
import "./styles.css";

const statusOptions = [
	{ key: "Paid", value: "Paid", text: "Paid" },
	{ key: "Pending", value: "Pending", text: "Pending" },
	{ key: "Overdue", value: "Overdue", text: "Overdue" },
	{ key: "Canceled", value: "Canceled", text: "Canceled" },
];

const list = [
	{
		name: "Lucero Quiroga",
		amount: "$ 600",
		status: "Paid",
		due: "Due January 10, 2021",
		number: "#LR0000001",
		color: "blue",
	},
	{
		name: "Elias Flores",
		amount: "$ 800",
		status: "Pending",
		due: "Due February 19, 2021",
		number: "#EF0000003",
		color: "red",
	},
	{
		name: "Marcelo Antezana",
		amount: "$ 300",
		status: "Overdue",
		due: "Due July 1, 2021",
		number: "#MA0000011",
		color: "brown",
	},
	{
		name: "Maria Quiroga",
		amount: "$ 1200",
		status: "Canceled",
		due: "Due July 4, 2021",
		number: "#MQ0000002",
		color: "grey",
	},
	{
		name: "Elias Flores",
		amount: "$ 800",
		status: "Pending",
		due: "Due February 19, 2021",
		number: "#EF0000003",
		color: "red",
	},
	{
		name: "Maria Quiroga",
		amount: "$ 1200",
		status: "Canceled",
		due: "Due July 4, 2021",
		number: "#MQ0000002",
		color: "grey",
	},
];

function Invoices() {
	return (
		<Container>
			<br />
			<br />
			<Grid>
				<Grid.Row verticalAlign="middle">
					<Grid.Column textAlign="left" width={8}>
						<Dropdown placeholder="State" search selection options={statusOptions} />
					</Grid.Column>
					<Grid.Column textAlign="right" width={8}>
						<Button
							as={Link}
							to="/invoices/create"
							color="teal"
							content="Invoice"
							icon="plus"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row textAlign="centered">
					<Header as="h1">Invoices</Header>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="left" width={4}>
						<Header as="h4" color="grey">
							Name
						</Header>
					</Grid.Column>
					<Grid.Column textAlign="left" width={2}>
						<Header as="h4" color="grey">
							Amount
						</Header>
					</Grid.Column>
					<Grid.Column textAlign="left" width={2}>
						<Header as="h4" color="grey">
							Status
						</Header>
					</Grid.Column>
					<Grid.Column textAlign="left" width={4}>
						<Header as="h4" color="grey">
							Overdue Date
						</Header>
					</Grid.Column>
					<Grid.Column textAlign="left" width={4}>
						<Header as="h4" color="grey">
							Number
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider />
			<Grid>
				{list.map((item, index) => {
					return <InvoiceCard key={index} value={item} />;
				})}
			</Grid>
			<br />
			<Container>There are 15 total invoices</Container>
			<Container textAlign="center">
				<Pagination
					defaultActivePage={1}
					firstItem={null}
					lastItem={null}
					pointing
					secondary
					totalPages={3}
				/>
			</Container>
			<br />
			<br />
		</Container>
	);
}

export default Invoices;
