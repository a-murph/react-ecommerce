import axios from "axios";

export default {
	search: (term) => {
		return axios.get(`/api/search?s=${term}`);
	},
	searchOne: (id) => {
		return axios.get(`/api/product/${id}`);
	}
};