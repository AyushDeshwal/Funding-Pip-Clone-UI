import {TRADING_IMG} from "../utils/constants"
import { blocksData } from "../utils/BlocksData";
import Blocks from "./Blocks";

const TradingInfo = () =>{
    const data = blocksData;
    var listItems = document.querySelectorAll(".list1 li");

    listItems.forEach(function(item, index) {
      item.addEventListener("click", function() {
        document.querySelectorAll(".list1 li").forEach(function(li) {
          li.classList.remove("selected");
        });
        this.classList.add("selected");
      });
    });
 
    var listItems2 = document.querySelectorAll(".list2 li");
    listItems2.forEach(function(item, index) {
        item.addEventListener("click", function() {
          document.querySelectorAll(".list2 li").forEach(function(li) {
            li.classList.remove("selected");
          });
          this.classList.add("selected");
        });
      });
    
   

return(<>
    <div className="trading-info">
        <div className="trading-image"> 
        <img className="graph" src={TRADING_IMG}></img>
        </div>

        <div className="info">
        <text>Built By Traders For Traders.</text>
        <br></br>
        <text>Your Trading Ideas, Our Risk.</text>
        <p>Funding Pips believes that traders go through three main levels in their careers, Student - Practitioner - Master, with FP's in house-built two phases evaluation (Student - Practitioner) and funded (Master), which's built to find trading talents while helping them get through their funding problems, by offering them the possibility to trade up $300.000.</p>
        </div>
  
    </div>

<div className="blocks">
    {data.map((card)=> <Blocks  key={card.id} data ={card} />)}
    </div>

    <div className="trading-option">

    <ul className="list1">
    <li>Matchtrader</li>
    <li>cTrader</li>
    </ul>

    <ul className="list2">
        <li>$5k</li>
        <li>$10k</li>
        <li>$25k</li>
        <li>$50k</li>
        <li>$100k</li>
    </ul>

    </div>
    </>
)
}

export default TradingInfo;