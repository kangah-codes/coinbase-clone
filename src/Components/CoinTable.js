/* eslint-disable jsx-a11y/alt-text */
//icon imports
import btc from "../Assets/bitcoin.png";
import eth from "../Assets/eth.png";
import lite from "../Assets/lite.png";
import cash from "../Assets/bitcoin-cash.png";
import chart from "../Assets/chart.png";

const coinData = [
	{
		icon: btc,
		name: "Bitcoin",
		code: "BTC",
		price: "GHS 314,259.22",
		change: -4.86,
		chart: chart,
	},
	{
		icon: eth,
		name: "Ethereum",
		code: "ETH",
		price: "GHS 314,259.22",
		change: 2.75,
		chart: chart,
	},
	{
		icon: lite,
		name: "Litecoin",
		code: "LTC",
		price: "GHS 314,259.22",
		change: 5.23,
		chart: chart,
	},
	{
		icon: cash,
		name: "Bitcoin Cash",
		code: "BCH",
		price: "GHS 314,259.22",
		change: -4.15,
		chart: chart,
	},
];

const CoinRow = ({ id, icon, name, code, price, change, chart }) => {
	return (
		<>
			<tr className="hidden lg:table-row">
				<td className="pl-10 py-4 whitespace-nowrap text-lg text-gray-500">
					{id}
				</td>
				<td className="pr-6 py-4 whitespace-nowrap">
					<div className="flex items-center">
						<div className="flex-shrink-0 h-10 w-10">
							<img
								className="h-10 w-10 rounded-full"
								src={icon}
							/>
						</div>
						<div className="ml-4">
							<div className="text-lg font-normal text-gray-900">
								{name}
							</div>
						</div>
						<div className="ml-4">
							<div className="text-lg font-normal text-gray-400">
								{code}
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-lg text-gray-500">
					{price}
				</td>
				<td
					className={`py-4 whitespace-nowrap text-lg ${
						change < 0 ? "text-red-600" : "text-green-600"
					}`}
				>
					{change < 0 ? `${change}%` : `+${change}%`}
				</td>
				<td className="py-4 whitespace-nowrap text-lg text-gray-500">
					<img className="h-10 w-20" src={chart} />
				</td>
				<td className="py-4 whitespace-nowrap text-sm font-normal">
					<button
						style={{ borderRadius: "4px" }}
						href="#"
						className="text-white bg-coinbase-green py-3 px-5"
					>
						Buy
					</button>
				</td>
			</tr>

			<tr className="table-row lg:hidden">
				<td className="hidden lg:block pl-10 py-4 whitespace-nowrap text-lg text-gray-500">
					{id}
				</td>
				<td className="pl-6 lg:pl-0 py-4 whitespace-nowrap">
					<div className="flex items-center">
						<div className="flex-shrink-0 h-10 w-10">
							<img
								className="h-10 w-10 rounded-full"
								src={icon}
							/>
						</div>
						<div className="ml-4">
							<div className="text-lg font-normal text-gray-900">
								{name}
							</div>
							<div className="block lg:hidden text-lg font-normal text-gray-400">
								{code}
							</div>
						</div>
						<div className="ml-4 hidden lg:block">
							<div className="text-lg font-normal text-gray-400">
								{code}
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-lg text-right text-gray-500 pr-6 lg:pr-0">
					{price}
					<div
						className={`whitespace-nowrap text-right text-lg ${
							change < 0 ? "text-red-600" : "text-green-600"
						}`}
					>
						{change < 0 ? `${change}%` : `+${change}%`}
					</div>
				</td>
			</tr>
		</>
	);
};

const CoinTable = () => {
	return (
		<div className="flex flex-col px-0 md:px-10 lg:px-16 lg:max-w-7xl w-full mx-auto">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						className="shadow overflow-hidden border-b border-gray-200"
						style={{ borderRadius: "4px" }}
					>
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-white">
								<tr className="hidden lg:table-row">
									<th
										scope="col"
										className="pl-10 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										#
									</th>
									<th
										scope="col"
										className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										Price
									</th>
									<th
										scope="col"
										className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										Change
									</th>
									<th
										scope="col"
										className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										Chart
									</th>
									<th
										scope="col"
										className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
									>
										Trade
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{coinData.map((_item, _i) => (
									<CoinRow
										id={_i + 1}
										icon={_item.icon}
										name={_item.name}
										code={_item.code}
										price={_item.price}
										change={_item.change}
										chart={_item.chart}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoinTable;
