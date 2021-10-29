import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="error">
			<h2>Page not found</h2>

			<Link to="/mern-countries-app">
				<p>Back to home page</p>
			</Link>
		</div>
	);
};

export default Error;
