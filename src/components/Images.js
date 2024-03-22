import { BLOOMBERG_IMG, INSIDER_IMG, YAHOO_IMG } from "../utils/constants";

const Images = ()=>{
    return(
        <div className="company-images"> 
            <img src={BLOOMBERG_IMG}></img>
            <img src={INSIDER_IMG}></img>
            <img id="yahoo"src={YAHOO_IMG}></img>
        </div>
    )
}

export default Images; 