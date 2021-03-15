import { Container, Card, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import "./Person.css";
import { useDispatch } from "react-redux";
import { likePerson } from "../../actions/people.js";
const Person = ({ person, setCurrentId }) => {
	const dispatch = useDispatch();
	console.log(person._id);
	return (
		<>
			<div class="property-card">
				<div class="property-image">
					<Button
						className="likeButton"
						variant=""
						onClick={() => dispatch(likePerson(person._id))}
					>
						<Row className="likeContent">
							<i class="fa fa-1x fa-heart" aria-hidden="true"></i>{" "}
							<h5 className="likes">{person.like}</h5>
						</Row>
					</Button>
					<a href={person.link} target="_blank">
						<img src={person.file} alt="" />
					</a>
				</div>

				<div class="property-description">
					<h5 className="time">{moment(person.postDate).fromNow()}</h5>
					<h5 className="name"> {person.name} </h5>
					<h5 className="desc">{person.inspire}</h5>

					<h5 className="by">Posted By : {person.creatorName}</h5>
				</div>
			</div>
		</>
	);
};
export default Person;
