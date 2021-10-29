import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BorderCountries = (props) => {
	const detail = props.data;
	var url;

	//checking if the country passed as props has valid data for bordering countries, and
	// making the url fetch the data for all the borders using the cca3 codes
	if (detail.borders !== undefined) {
		var borders = detail.borders;
		url =
			"https://reed-countries-api.herokuapp.com/codelist/list=" +
			borders.join(",");
	} else {
		url = "none";
	}

	const { data, loading, error } = useFetch(url);

	return (
		<div className="three">
			<h4>Border Countries: </h4>
			{loading && <p>Loading...</p>}
			{error && <p>Borders not found</p>}
			{data &&
				Array.isArray(data) &&
				data.map((border) => (
					//making the displayed country name link to the details for the country
					<Link to={"/mern-countries-app/" + border.cca3} key={border.cca3}>
						<p>{border.name}</p>
					</Link>
				))}
		</div>
	);
};

export default BorderCountries;
