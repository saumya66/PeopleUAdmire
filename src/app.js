import React from "react";
import "./app.css";
import { Card, Container, Navbar, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import People from "./Components/People/People";
import Form from "./Components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPeople } from "./actions/people.js";

const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const [modalShow, setModalShow] = React.useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPeople());
	}, [dispatch, currentId]);

	function handleModal() {
		setModalShow(true);
	}
	return (
		<div className="app">
			<Container fluid className="headCont">
				<h1>People U Admire</h1>
			</Container>

			<Container className="formCont">
				{/* <Container className="postButton" fluid>
					<Button variant="primary" onClick={() => setModalShow(true)}>
						
					</Button>   */}
				<button class="glow-on-hover" type="button" onClick={handleModal}>
					<p className="postButtonText">Post</p>
				</button>

				<Form show={modalShow} onHide={() => setModalShow(false)} />
			</Container>
			<Row className="mainRow">
				<Col md={9} xs={12} xs={{ order: 1 }}>
					<Container className="peopleCont" fluid>
						<People setCurrentId={setCurrentId} />
					</Container>
				</Col>
				<Col md={3} xs={12} xs={{ order: 2 }}>
					<div className="aboutCont">
						<h2 className="peep">About PeopleUAdmire</h2>
						<p>
							To create one place - Made by people, For People to Find Awesome
							People.
						</p>
						<p>
							Person can be anyone who inspires you or you have learnt things
							from and you believe others should know about!
						</p>
						<p>
							We trust you to be genuine and post positive content. If you find
							something negative do ping us from the links below.
						</p>
						<div class="wrapper">
							<a href="https://twitter.com/saumya4real" target="_blanket">
								<i class="fa fa-4x fa-twitter-square"></i>
							</a>
							<a href="https://github.com/saumya66" target="_blanket">
								<i class="fa fa-4x fa-github-square"></i>
							</a>

							<a href="mailto:futuredrivenme@gmail.com" target="_blanket">
								<i class="fa fa-4x fa-envelope-square"></i>
							</a>
						</div>
					</div>

					<a
						target="_blank"
						href="https://twitter.com/intent/tweet?text=I%20loved%20this.%20Try%20it%20out ! -%20https://people-u-admire.netlify.app/"
					>
						<Button className="shareButton" variant="primary">
							<i class="fa fa-twitter"></i>
							{"  "}Share
						</Button>{" "}
					</a>
				</Col>
			</Row>
		</div>
	);
};

export default App;

// background-color: #f2f2f2;
