import axios from "axios";

export default {
	search: (term, cat, sub) => {
		return axios.get(`/api/search?s=${term}&c=${cat}&sub=${sub}`);
	},
	searchOne: (id) => {
		return axios.get(`/api/product/${id}`);
	}
};