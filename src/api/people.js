import axios from "axios";

const url = "https://people-u-admire.herokuapp.com/people";

export const fetchPeople = () => axios.get(url);
export const createPerson = (newPerson) => axios.post(url, newPerson);
export const likePerson = (id) => axios.patch(`${url}/${id}/likeperson`);
