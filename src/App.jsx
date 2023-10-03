import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoinsTable from "./pages/CoinsTable";
import CoinsInfo from "./pages/CoinsInfo";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/coinstable" element={<CoinsTable />} />
                    <Route path="/coinsinfo" element={<CoinsInfo />} />
                    <Route path="/profile" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
