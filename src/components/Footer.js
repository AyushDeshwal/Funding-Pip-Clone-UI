import { ARROW_PNG, COPYRIGHT_PNG, DISCORD_PNG, DISCORD_SM_PNG, FACEBOOK_SM_PNG, INSTA_SM_PNG, MAIN_ICON_URL, TWITTER_SM_PNG, YOUTUBE_SM_PNG } from "../utils/constants";


const Footer = ()=>{
    return(<>
    <div className="footer">

        <div className="grid1">
             <div className="logo">
            <img className="logo-icon" src={MAIN_ICON_URL}></img>
           <span> FUNDING PIPS</span> 
           </div>
           <div className="about-company">
            <p>All content published and distributed by Funding Pips, and its affiliates(collectively, the Company) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund, Funding pips does not act as or conduct services as a broker. Funding pips does not act as or conduct services as a custodian. People who register for our programs do so at their own volition, Purchases of programs should not be considered deposits. All program fees are used for operation costs including, but not limited to, staff, technology and other business related expenses. Nothing contained herein is a solicitation or an offer to buy or sell futures, options, or forex. Past performance is not necessarily indicative of future results. Applicable law to be under the laws of The United Arab Emirates.</p>
            <p className="imp">Please note that all accounts we provide to our clients are demo accounts in a simulated trading environment.</p>
            <p className="imp">Restricted countries: United Arab Emirates and Vietnam</p>
            <button className="round-button"><img src={DISCORD_SM_PNG}></img></button>
            <button className="round-button"><img src={FACEBOOK_SM_PNG}></img></button>
            <button className="round-button"><img src={INSTA_SM_PNG}></img></button>
            <button className="round-button"><img src={YOUTUBE_SM_PNG}></img></button>
            <button className="round-button"><img src={TWITTER_SM_PNG}></img></button>
           </div>
        </div>

         <div className="gird">
            <div className="signup">
              <text>Newsletter signup</text>
              <input id="signup-input" type="text" placeholder="Enter your email "></input><button id="input-btn"><img id="input-btn-img" src={ARROW_PNG}></img></button>
              </div>
              <div className="links">
                <ul>
                    <li className="clr-li">LEGAL</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul>
                    <li className="clr-li">USEFUL LINKS</li>
                    <li>Home</li>
                    <li>FAQs</li>
                    <li>Trading Rules</li>
                    <li>Affiliate Program</li>
                    <li>Contact US</li>
                </ul>
              </div>
         </div>
       
        </div>
        <div className="copy-rights">
            <text><img src={COPYRIGHT_PNG}></img>2024 Funding Pips. All Rights Reserved.</text>
         </div>
        
        </>
    )
}

export default Footer;