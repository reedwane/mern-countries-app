import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import lens from "./lens-black.png";

const Home = () => {
	const [url, setUrl] = useState(
		"https://reed-countries-api.herokuapp.com/all",
	);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");

	// this is to change the url only when the filter value gets updated
	useEffect(() => {
		if (filter) {
			if (filter === "all") {
				//reseting the url to get data for all countries
				setUrl("https://reed-countries-api.herokuapp.com/all");
			} else {
				//setting the url to get the data for the selected region based on the filter value
				setUrl("https://reed-countries-api.herokuapp.com/" + filter);
			}
		}
	}, [filter]);

	return (
		<div>
			<div className="search-filter">
				<div className="input-div">
					<img
						src={lens}
						alt="lens"
						onClick={() => {
							// making the search icon respond to click events and search
							if (search !== "") {
								setUrl(
									"https://reed-countries-api.herokuapp.com/" +
										filter +
										"/" +
										search,
								);
							}
						}}
					/>
					<input
						type="search"
						name="search"
						id="search"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						onKeyUp={(e) => {
							if (e.key === "Enter" && search !== "") {
								// this changes the url to fetch from when a search value is entered
								setUrl(
									"https://reed-countries-api.herokuapp.com/" +
										filter +
										"/" +
										search,
								);
							}
						}}
						placeholder="Search for a country by name..."
					/>
				</div>

				<select
					required
					id="filter"
					// making the filter get all countries or the specified region alone
					value={filter || "all"}
					name="filter"
					onChange={(e) => {
						setFilter(e.target.value);
					}}
				>
					<option value="all">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="Americas">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>

			{/* passing the modified url as a prop to the component that renders the
			list of the countries */}
			<CountriesList url={url} />
		</div>
	);
};

export default Home;
