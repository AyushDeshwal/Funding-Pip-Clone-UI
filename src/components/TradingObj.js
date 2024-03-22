import { ARROW_PNG, TRADING_OBJ, DISCORD_PNG } from "../utils/constants"

const TradingObj = ()=>{
    return(
        <div>
            <div className="objectives">
                <section>
                    <h2>Stay updated with our in depth trading rules.</h2>
                    <p>Trading Objectives are a key element to evaluate a trader's skills, meeting the trading objectives proves that the trader is disciplined and consistent.</p>
                    <span className="btn-img"><img className="btn-icons" src={ARROW_PNG}></img> <button >Trading Rules</button> </span>
                </section>
                <section><img id="trade-obj-img" src={TRADING_OBJ}></img></section>
            </div>
            
               <div className="join-team">
                <h2>Join A Team Of Skillful Traders</h2>
                <p>When it comes to trading we believe in consistency and risk management, which are the discipline indicator, the rest of the skills can be developed. Please keep that in mind! We are seeking real traders not bounty hunters.</p>
                <span className="btn-img"><img className="btn-icons" src={ARROW_PNG}></img> <button >Buy challenge</button> </span>
           <span className="btn-img"><img className="btn-icons" src={DISCORD_PNG} ></img> <button id="discord-btn"> Join discord</button></span>
               </div>
               
               
        </div>
    )
}

export default TradingObj;