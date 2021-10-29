import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import CountryDetail from "./CountryDetail";
import Error from "./Error";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/mern-countries-app">
						<Home />
					</Route>

					<Route path="/mern-countries-app/:country">
						<CountryDetail />
					</Route>

					<Route path="/*">
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
