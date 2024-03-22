import { MAIN_ICON_URL, ARROW_PNG, DASHBOARD_ARROW, DARK_MODE_ICON } from "../utils/constants";

const Header = ()=>{
     
    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header");
        if (window.scrollY > 0) {
            header.classList.add('border-on-scroll');
        } else {
            header.classList.remove('border-on-scroll');
        }
    });
    
    return (

        <div className="header">
       
            <div className="logo">
            <img className="logo-icon" src={MAIN_ICON_URL}></img>
           <span> FUNDING PIPS</span> 
           </div>

           <div className="navigations">
            <span>Home</span>
            <span>Trading Rules</span>
            <span>FAQ</span>
            <span>Contact Us</span>
            <span className="btn-img"><img className="btn-icons" src={ARROW_PNG}></img><button>Buy Challenge</button></span>
            <span id="dashboard">Dashboard <img className="btn-icons" id="dash-img" src={DASHBOARD_ARROW}></img></span>
           </div>
           
           <div className="theme-btn">
            <button id="theme-toggle"><img src={DARK_MODE_ICON}></img>    </button>
           </div>
        </div>
    )
}

export default Header; 