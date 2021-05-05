/* eslint-disable jsx-a11y/alt-text */
import ample from "../Assets/ample.svg";
import celo from "../Assets/celo.svg";
import graph from "../Assets/graph.svg";
import cypher from "../Assets/cypher.svg";
import { ReactComponent as Arrow } from "../Assets/right-arrow.svg";

const earnList = [
	{
		img: ample,
		name: (
			<p>
				Ampleforth <br />
				Governance Token
			</p>
		),
		code: "FORTH",
	},
	{
		img: celo,
		name: "Celo",
		code: "CGLD",
	},
	{
		img: graph,
		name: "The Graph",
		code: "GRT",
	},
	{
		img: cypher,
		name: "NuCypher",
		code: "NU",
	},
];

const EarnListItem = ({ img, name, code }) => {
	return (
		<div className="px-3 md:px-6 py-5 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
			<div className="flex">
				<img src={img} className="w-10 h-10" />
				<p className="my-auto ml-4 text-lg lg:text-xl font-medium col-span-2">
					{name}
				</p>
				<p className="my-auto ml-4 text-lg lg:text-xl font-medium hidden lg:block">
					{code}
				</p>
				<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
					Earn $3 {code}
				</p>
			</div>
		</div>
	);
};

const Earn = () => {
	return (
		<div className="px-7 lg:px-16 lg:max-w-7xl w-full mx-auto py-10">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="my-auto mx-auto lg:mx-0">
					<p className=" text-3xl md:text-4xl font-medium max-w-sm text-center lg:text-left">
						Earn up to $39 worth of crypto
					</p>
					<p className="mt-4 text-sm max-w-sm text-center lg:text-left">
						Discover how specific cryptocurrencies work — and get a
						bit of each crypto to try out for yourself.
					</p>
					<div className="flex">
						<button
							className="bg-coinbase text-white text-sm px-4 py-3 mt-4 mx-auto lg:mx-0"
							style={{ borderRadius: "4px" }}
						>
							Start earning
						</button>
					</div>
				</div>
				<div className="mt-4 lg:mt-0">
					<div className="border lg:border-none border-gray-200 rounded-sm">
						{earnList.map((_item) => (
							<EarnListItem
								img={_item.img}
								name={_item.name}
								code={_item.code}
							/>
						))}
					</div>

					<div className="mt-3">
						<p className="ml-8 font-normal text-coinbase hover:underline">
							View more {">"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Earn;
