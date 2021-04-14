import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Container, Form, Input, Button } from "react-bootstrap";

import "../../styles/demo.scss";

export const SingUp = () => {
	const { store, actions } = useContext(Context);

	return <Container />;
};
