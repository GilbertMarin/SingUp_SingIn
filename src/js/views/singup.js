import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Container, Form, Input, Button, Row, Col, FormGroup } from "react-bootstrap";

import "../../styles/demo.scss";

export const SingUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row class="justify-content-center pt-5 mt-5">
				<Col>
					<Form>
						<FormGroup>
							<h1>Sing In</h1>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
