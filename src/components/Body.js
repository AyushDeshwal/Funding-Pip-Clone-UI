import { ARROW_PNG, DASHBOARD_PNG, DISCORD_PNG, TROPHY_PNG } from "../utils/constants";

const Body =()=>{
    return (
        <div className="main-body">

         <div className="tag-line">
            <text> Your Skill Is</text><br></br>
            <text id="bluetext"> Our Capital.</text>
            <p>We risk while you recieve up to 90% of the Profit.</p>
           <span className="btn-img"><img className="btn-icons" src={ARROW_PNG}></img> <button >Buy challenge</button> </span>
           <span className="btn-img"><img className="btn-icons" src={DISCORD_PNG} ></img> <button id="discord-btn"> Join discord</button></span>
           <span className="btn-img"><img className="btn-icons" src={TROPHY_PNG}></img> <button id="join-btn">Join competition</button></span>
            </div>
            
         <div className="dashboard-img">
            <img className="graph" src={DASHBOARD_PNG}></img>
         </div>
         
        </div>
    )
}

export default Body;