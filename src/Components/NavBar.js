/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../Assets/logo.svg";
import NavItem from "./NavItem";

// Prices;
// Learn;

// Individuals;

// Businesses;

// Developers;

// Company;

const tabs = [
	"Prices",
	"Learn",
	"Individuals",
	"Businesses",
	"Developers",
	"Company",
];

const NavBar = () => {
	return (
		<nav className="w-full bg-white border-b border-gray-200">
			<div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-3 xl:justify-start xl:space-x-10">
						<div className="flex justify-start xl:w-0 xl:flex-1">
							<span>
								<span className="sr-only">Workflow</span>
								<img className="w-28" src={logo} alt="logo" />
							</span>
						</div>
						<div className="-mr-2 -my-2 xl:hidden">
							<button
								type="button"
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								aria-expanded="false"
							>
								<span className="sr-only">Open menu</span>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<nav className="hidden xl:flex space-x-10 h-full">
							{tabs.map((_item, _i) => (
								<NavItem tabName={_item} />
							))}
						</nav>
						<div className="hidden xl:flex items-center justify-end md:flex-1 xl:w-0">
							<a
								href="#"
								className="whitespace-nowrap text-black hover:text-coinbase text-sm"
							>
								Sign in
							</a>
							<a
								href="#"
								style={{ borderRadius: "4px" }}
								className="ml-5 whitespace-nowrap inline-flex items-center justify-center text-sm px-4 py-2
                                border border-transparent shadow-sm text-white bg-coinbase hover:bg-indigo-700"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
