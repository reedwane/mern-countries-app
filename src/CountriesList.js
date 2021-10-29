import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const CountriesList = (props) => {
	//this assess the modified url passed as a prop based on the default, search or filter
	let url = props.url;
	// console.log(url);
	const { data, loading, error } = useFetch(url);

	return (
		<div>
			<div className="countries-list">
				{loading && <h2>Loading...</h2>}
				{data &&
					Array.isArray(data) &&
					data.map((country) => (
						<div
							className="country-detail"
							key={country.cca3}
							id={country.cca3}
						>
							<Link to={"/mern-countries-app/" + country.cca3}>
								<img className="flag" src={country.flag} alt={country.name} />
								<div className="detail">
									<h2 className="country-name">{country.name}</h2>
									<p className="population">
										Populaton:{" "}
										<span className="tag">
											{country.population.toLocaleString("en")}
										</span>
									</p>
									<p className="region">
										Region: <span className="tag">{country.region}</span>
									</p>
									<p className="capital">
										Capital: <span className="tag">{country.capital}</span>
									</p>
								</div>
							</Link>
						</div>
					))}
				{error && (
					<div>
						<h2>Could not get country details</h2>
						<p>Please refresh the page</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CountriesList;
