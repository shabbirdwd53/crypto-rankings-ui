import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CoinListItem from "./CoinListItem";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("http://localhost:8080/api/v1/coins");
      setCoins(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="antialiased  text-gray-600 h-screen px-4">
      <div className="flex flex-col mt-4 h-full">
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Cryptos</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Rank</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Coin</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Market Cap</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Change</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {coins?.map((coin) => (
                    <CoinListItem coin={coin} key={coin.uuid} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinList;
