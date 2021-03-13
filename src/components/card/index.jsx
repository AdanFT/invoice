import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

function InvoiceCard(props) {
	const { name, amount, color, status, due, number } = props.value;
	return (
		<Grid.Row className="card-border">
			<Grid.Column textAlign="left" width={4}>
				<Header>{name}</Header>
			</Grid.Column>
			<Grid.Column textAlign="left" width={2}>
				{amount}
			</Grid.Column>
			<Grid.Column textAlign="left" width={2}>
				<Header as="h4" color={color}>
					{status}
				</Header>
			</Grid.Column>
			<Grid.Column textAlign="left" width={4}>
				<Icon name="calendar alternate" color="grey" />
				{due}
			</Grid.Column>
			<Grid.Column textAlign="left" width={2}>
				{number}
			</Grid.Column>
			<Grid.Column textAlign="center" width={2}>
				<Icon name="angle right" color="grey" />
			</Grid.Column>
		</Grid.Row>
	);
}

export default InvoiceCard;
