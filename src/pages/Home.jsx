import React, { useState, useEffect } from "react";
import Crypto from "../assets/crypto.jpg";
import Coin from "../components/Coin";
import coinsData from "../assets/data.json";
import "../styles/Home.css";
import Logo from "../assets/logo.png";

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setCoins(coinsData);
    }, []);

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="home">
            <div className="homeTitle">
                <img className="homeLogo" src={Logo} alt="Logo" />
                <h1>MeloGecko</h1>
                <h3>The best site for Cryptocurrency track</h3>
            </div>
            <div className="homeTop">
                <h2>TOP 3 Cryptocurrency</h2>
                {filteredCoins.slice(0, 3).map((coin) => {
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
                            className="homeCoin"
                        />
                    );
                })}
            </div>
            <div className="homeInfo">
                <h1>
                    What is <b>Cryptocurrency</b>?
                </h1>
                <div className="wrap">
                    <img
                        src={Crypto}
                        alt="Cryptocurrency"
                        className="homeCrypto"
                    />
                </div>
                <p className="homeText">
                    Cryptocurrency is a digital currency that can be used to buy
                    goods and services, but uses an online ledger with strong
                    cryptography to secure online transactions. Much of the
                    interest in these unregulated currencies is to trade for
                    profit, with speculators at times driving prices skyward.
                </p>
            </div>
        </div>
    );
};

export default Home;
