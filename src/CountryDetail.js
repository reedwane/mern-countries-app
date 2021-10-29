import { Link, useParams } from "react-router-dom";
import MoreDetails from "./MoreDetails";
import useFetch from "./useFetch";

const CountryDetail = () => {
	const { country } = useParams(); //gets the cca3 code from the url clicked to know which specific country is clicked
	let url = "https://reed-countries-api.herokuapp.com/code/" + country; //sets the url for that country

	const { data, loading, error } = useFetch(url);

	return (
		<div className="specific">
			<Link to="/mern-countries-app">
				<p className="home">&#8592; Back</p>
			</Link>

			{loading && <h2>Loading..</h2>}

			{error && (
				<div>
					<h2>Could not get country details</h2>
					<Link to="/mern-countries-app">Back to homepage</Link>
				</div>
			)}

			{/* if the data retrieved is an array as expected, we render the details using the first data in the array */}
			{data && Array.isArray(data) && <MoreDetails data={data[0]} />}
		</div>
	);
};

export default CountryDetail;
