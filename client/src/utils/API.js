import axios from "axios";

export default {
	search: (term, cat) => {
		return axios.get(`/api/search?s=${term}&c=${cat}`);
	},
	searchOne: (id) => {
		return axios.get(`/api/product/${id}`);
	}
};