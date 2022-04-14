import React from "react";
import { useRouter } from "next/router";

const CoinListItem = ({ coin }) => {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/coin/${coin.symbol}`)}
      className="cursor-pointer hover:bg-gray-100  transition-all duration-150"
    >
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{coin.rank}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className=""
              src={coin.iconUrl}
              width="40"
              height="40"
              alt={coin.name}
            />
          </div>
          <div className="font-medium text-gray-800">{coin.name}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{`$ ${Number(coin.price).toFixed(2)}`}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium">
          {`$ ${Number(coin.marketCap).toFixed(2)}`}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div
          className={`text-lg text-left ${
            Number(coin.change) < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {coin.change}
        </div>
      </td>
    </tr>
  );
};

export default CoinListItem;
