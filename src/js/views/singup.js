import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Container, Form, Input, Button, Row, Col, FormGroup } from "react-bootstrap";

import "../../styles/demo.scss";

export const SingUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row className="justify-content-center pt-5 mt-5 mr-1">
				<Col className="col-md-4 formulary">
					<Form action="">
						<FormGroup className="text-center pb-3">
							<h1 className="text-light">Register</h1>
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Name" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Last Name" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Username" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Password" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="text" className="form-control" placeholder="Confirm Password" />
						</FormGroup>
						<FormGroup className="mx-sm-4 pb-3">
							<input type="submit" className="btn btn-block singin" value="Register Now" />
						</FormGroup>
						<FormGroup className="text-center">
							<span>
								<a href="" className="register">
									Sing In
								</a>
							</span>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
