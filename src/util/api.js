
export default {
	BASE_PATH: "http://nflarrest.com/api/v1",

	/**
	 * Fires a request at the API
	 * @param {string} path - Path of the request, with starting /
	 * @param {object} options - A set of options for the request
	 * @param {object} options.headers - Any additional headers to send
	 * @returns {Promise} Fetch promise, resolves with JSON
	 */
	request(path, options) {
		// Setup some defaults
		const method = options.method ? options.method.toUpperCase() : "GET";
		let args = options.args || {};
		let body = null;
		let query = "";
		const headers = {
			accept: "application/json",
			...options.headers || {},
		};

		if (method === "POST" || method === "PUT") {
		// For POST and PUTs, send args as JSON body
		body = JSON.stringify(args);
		headers["Content-Type"] = "application/json";
	}
	else {
		// For anything else, send args as query params
		query = "?" + Object.keys(args).map((key) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(args[key])}`;
		}).join("&");
	}

		return fetch(this.BASE_PATH + path + query, {
			method,
			headers,
			body,
			mode: "cors",
		}).then((res) => {
			return res.json();
		}).catch((err) => {
			console.error("Uncaught error:", err);
		});
	},

	/**
	 * Fires a GET request at the API
	 * @param {string} path - Path of the request, with starting /
	 * @param {object} options - See request for all options
	 * @returns {Promise} Fetch promise, resolves with JSON
	 */
	get(path, options) {
		return this.request(path, { ...options, method: "GET" });
	},
};
