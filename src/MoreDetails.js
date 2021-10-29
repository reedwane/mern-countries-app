import BorderCountries from "./BorderCountries";

const MoreDetails = (props) => {
	// details is the data for the specific country clicked passed down as a prop
	const details = props.data;

	return (
		<div className="more-detail">
			<img src={details.flag} alt={(details.name, "flag")} />

			<div className="one">
				<h2 className="country-name">{details.name}</h2>
				<p className="native-name">
					Native Name: <span className="tag">{details.nativeName}</span>
				</p>

				<p className="population">
					Population:{" "}
					<span className="tag">{details.population.toLocaleString("en")}</span>
				</p>
				<p className="region">
					Region: <span className="tag">{details.region}</span>
				</p>
				<p className="capital">
					Capital: <span className="tag">{details.capital}</span>
				</p>
			</div>

			<div className="two">
				<p className="domain">
					Top Level Domain:{" "}
					<span className="tag">{details.topLevelDomain}</span>
				</p>
				<p className="currencies">
					Currencies: <span className="tag">{details.currency}</span>
				</p>
				<p className="language">
					Languages: <span className="tag">{details.languages.join(", ")}</span>
				</p>
			</div>

			{<BorderCountries data={details} />}
		</div>
	);
};

export default MoreDetails;
