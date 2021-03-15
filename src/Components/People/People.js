import react from "react";
import { Container, ProgressBar, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "../Person/Person";
import { useSelector } from "react-redux";

const People = ({ setCurrentId }) => {
	const people = useSelector((state) => state.people);
	people.sort((a, b) => (a.like > b.like ? -1 : 1));

	return !people.length ? (
		<p>Loading...</p>
	) : (
		<div>
			<Row>
				{people.map((person) => (
					<Person person={person} setCurrentId={setCurrentId} />
				))}
			</Row>
		</div>
	);
};
export default People;
