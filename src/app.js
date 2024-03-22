import React from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Images from "./components/Images";
import TradingInfo from "./components/TradingInfo";
import PricingTables from "./components/PricingTables";
import TradingObj from "./components/TradingObj";
import Footer from "./components/Footer";


const Applayout =() =>{
    return(
        <>
<Header />
<Body />
<Images />
<TradingInfo />
<PricingTables />
<TradingObj />
<Footer />
</>
    )
}

const root = ReactDOM.createRoot(document.querySelector(".body")).render(<Applayout />) 
