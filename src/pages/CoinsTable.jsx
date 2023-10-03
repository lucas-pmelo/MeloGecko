import React, { useState, useEffect } from "react";
import "../styles/CoinsTable.css";
import Coin from "../components/Coin";
import TableGuide from "../components/TableGuide";
import coinsData from "../assets/data.json";

function CoinsTable() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setCoins(coinsData);
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="coinsTable">
            <div className="coin-search">
                <h1 className="search-title">Search your Crypto</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={handleChange}
                        className="search-input"
                    />
                </form>
            </div>
            <TableGuide />
            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
}

export default CoinsTable;
