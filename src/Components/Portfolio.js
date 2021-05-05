import graph from "../Assets/graph_icon.svg";
import calendar from "../Assets/calendar.svg";
import vault from "../Assets/vault.svg";
import mobile from "../Assets/mobile.svg";
import app from "../Assets/apps.webp";

const portfolio = [
	{
		icon: graph,
		title: "Manage your portfolio",
		text:
			"Buy and sell popular digital currencies, keep track of them in the one place.",
	},
	{
		icon: calendar,
		title: "Recurring buys",
		text:
			"Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
	},
	{
		icon: vault,
		title: "Vault protection",
		text:
			"For added security, store your funds in a vault with time delayed withdrawals.",
	},
	{
		icon: mobile,
		title: "Mobile apps",
		text:
			"Stay on top of the markets with the Coinbase app for Android or iOS.",
	},
];

const PortfolioItem = ({ icon, title, text }) => {
	return (
		<a className="py-3 grid grid-cols-1 md:grid-cols-7 xl:grid-cols-9 xl:space-x-4 items-start rounded-lg group">
			<div
				className="bg-white rounded-full shadow-xl p-5 col-span-2 md:col-span-1 xl:col-span-2 mx-auto md:mx-0"
				style={{ width: "72px", height: "72px" }}
			>
				<img
					src={icon}
					className="transform w-full m-auto group-hover:scale-125 transition duration-500"
					alt="img"
				/>
			</div>

			<div className="col-span-5 md:col-span-6 xl:col-span-7 w-full text-center md:text-justify mt-5 md:mt-0">
				<p className="text-xl font-medium text-black transition duration-100 group-hover:text-insurerity-light">
					{title}
				</p>
				<p className="mt-3 text-md tracking-wide font-normal text-gray-400">
					{text}
				</p>
			</div>
		</a>
	);
};

const Portfolio = () => {
	return (
		<div className="px-7 lg:px-16 lg:max-w-7xl w-full mx-auto py-10">
			<div className="flex">
				<div className="mx-auto">
					<p
						className="font-medium text-center leading-tight"
						style={{ fontSize: "40px" }}
					>
						Create your cryptocurrency portfolio today
					</p>
					<p className="mt-6 text-center text-gray-400 font-light">
						Coinbase has a variety of features that make it the best
						place to start trading
					</p>
				</div>
			</div>

			<div className="flex mt-10">
				<div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-x-10 lg:px-20 xl:px-0">
					<div className="col-span-2 block xl:hidden">
						<img src={app} className="w-full" />
					</div>

					<div className="col-span-1">
						{portfolio.map((_item) => (
							<PortfolioItem
								title={_item.title}
								text={_item.text}
								icon={_item.icon}
							/>
						))}
					</div>

					<div className="col-span-2 hidden xl:block">
						<img src={app} className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
