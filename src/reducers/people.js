export default (people = [], action) => {
	switch (action.type) {
		case "GET_PEOPLE":
			return action.payload;
		case "CREATE_PEOPLE":
			return [...people, action.payload];
		case "LIKE_PERSON":
			return people.map((person) =>
				person._id === action.payload._id ? action.payload : person
			);

		default:
			return people;
	}
};

//Update the state
