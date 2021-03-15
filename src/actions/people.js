import * as api from "../api/people.js";

export const getPeople = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPeople();
		dispatch({ type: "GET_PEOPLE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createPerson = (person) => async (dispatch) => {
	try {
		const { data } = api.createPerson(person);
		dispatch({ type: "CREATE_PERSON", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const likePerson = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePerson(id);
		dispatch({ type: "LIKE_PERSON", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
