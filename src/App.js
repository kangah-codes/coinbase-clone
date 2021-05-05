import "./index.css";

// importing components
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import CoinTable from "./Components/CoinTable";
import Earn from "./Components/Earn";
import Portfolio from "./Components/Portfolio";

function App() {
	return (
		<div className="bg-white h-screen">
			<NavBar />
			<Hero />
			<CoinTable />
			<Earn />
			<div className="border-b border-gray-600">
				<Portfolio />
			</div>
		</div>
	);
}

export default App;
