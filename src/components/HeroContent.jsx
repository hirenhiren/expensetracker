import brandLogo from "../assets/daily-expense-logo.png";
import HeroBanner from "./HeroBanner";
import tick from '../assets/tick.svg';

const HeroContent = () =>{
    return(
        
          
        <div>
          <img src={brandLogo} className="w-[25%]" alt="banner" />
          <div className="lg:pl-[20%] pt-[10%]">
            <h2 className="text-4xl text-[#052f5f] font-medium animate">
              {" "}
              Daily Expenses{" "}
            </h2>
            <ul className="py-[5%] font-light text-xl lg:text-2xl">
              <li className="flex items-center  block py-3 animateTimeLine">
                <img src={tick} />
                <span className="pl-2">Add your Item List</span>
              </li>
              <li className="flex items-center  block py-3 animateTimeLine">
                <img src={tick} />
                <span className="pl-2">Check your Items</span>
              </li>
              <li className="flex items-center  block py-3 animateTimeLine">
                <img src={tick} />
                <span className="pl-2"> Know your Expenses</span>
              </li>
            </ul>
            <HeroBanner />
          </div>
        </div>
      
    );
}

export default HeroContent