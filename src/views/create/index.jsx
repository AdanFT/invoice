import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Grid, Header, Modal, Table } from "semantic-ui-react";

function InvoiceForm() {
	const [open, setOpen] = useState(false);
	return (
		<Container>
			<br />
			<br />
			<Form className="form-invoice">
				<Header as="h2" textAlign="center">
					Invoice Details
				</Header>
				<br />
				<Form.Group widths={2}>
					<Form.Input label="First Name" placeholder="First Name" />
					<Form.Input label="Last Name" placeholder="Last Name" />
				</Form.Group>
				<Form.Group widths={2}>
					<Form.Input label="Amount" placeholder="Amount" />
					<Form.Input label="Overdue Date" type="datetime-local" placeholder="Due" />
				</Form.Group>
				<br />
				<Header as="h3">Products</Header>
				<Modal
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={
						<Grid>
							<Grid.Column textAlign="right">
								<Button content="Item" icon="plus" />
							</Grid.Column>
						</Grid>
					}
				>
					<Modal.Header>Create Item</Modal.Header>
					<Modal.Content>
						<Form>
							<Form.Field>
								<label>Description</label>
								<input placeholder="Description" />
							</Form.Field>
							<Form.Group widths={2}>
								<Form.Input label="Unit Price" placeholder="Unit Price" />
								<Form.Input label="Quantity" placeholder="Quantity" />
							</Form.Group>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button color="grey" content="Cancel" onClick={() => setOpen(false)} />
						<Button color="teal" content="Save" onClick={() => setOpen(false)} />
					</Modal.Actions>
				</Modal>
				<br />
				<Table basic color="black">
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>Unit Price</Table.HeaderCell>
							<Table.HeaderCell>Quantity</Table.HeaderCell>
							<Table.HeaderCell>Total</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row>
							<Table.Cell>Product item 1</Table.Cell>
							<Table.Cell>$ 100</Table.Cell>
							<Table.Cell>10</Table.Cell>
							<Table.Cell>$ 1000</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Product item 2</Table.Cell>
							<Table.Cell>$ 500</Table.Cell>
							<Table.Cell>15</Table.Cell>
							<Table.Cell>$ 1500</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Product item 3</Table.Cell>
							<Table.Cell>$ 80</Table.Cell>
							<Table.Cell>5</Table.Cell>
							<Table.Cell>$ 500</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<br />
				<Grid textAlign="center">
					<Grid.Column width={5}>
						<Header sub>Sub Total:</Header>
						<span>$500</span>
					</Grid.Column>
					<Grid.Column width={6}>
						<Header sub>Tax:</Header>
						<span>$10</span>
					</Grid.Column>
					<Grid.Column width={5}>
						<Header sub>Grand Total:</Header>
						<span>$1500</span>
					</Grid.Column>
				</Grid>
				<br />
				<br />
				<Divider />
				<Grid>
					<Grid.Column width={12} textAlign="right">
						<Button as={Link} to="/invoices" color="grey">
							Cancel
						</Button>
					</Grid.Column>
					<Grid.Column width={4} textAlign="right">
						<Button type="submit" color="teal">
							Save
						</Button>
					</Grid.Column>
				</Grid>
			</Form>
		</Container>
	);
}

export default InvoiceForm;
