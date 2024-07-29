import { React, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleDesc from "./components/TitleDesc";
import HeroContent from "./components/HeroContent";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

gsap.registerPlugin(ScrollTrigger);

const dataInfo = [
  {
    id:'01',
    ItemDT:new Date('2024-07-28'),
    ItemName:'Cake',
    ItemPrice: '200'
  },
  {
    id:'02',
    ItemDT:new Date('2024-07-28'),
    ItemName:'Pepsi',
    ItemPrice: '300'
  }
]
const App = () => {
  const contentRef = useRef(null);
  const[initialDataList, setInitialDataList] = useState(dataInfo);

  const receiveEnteredData = (receiveNewEnteredData) =>{
    setInitialDataList((prevData) => [...prevData,...receiveNewEnteredData]);
    console.log(receiveNewEnteredData)
}

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 95%", // When the top of the element reaches 75% of the viewport height
          end: "bottom 25%", // When the bottom of the element reaches 25% of the viewport height
          toggleActions: "play none none none", // Play the animation when entering the viewport
        },
      }
    );
  }, []);

  

  return (
    <div className="flex flex-col lg:flex-row h-screen justify-between">
      <div className="leftDiv bg-[#cad7fe] p-4 w-full lg:w-2/5 relative lg:fixed">
       <HeroContent />
      </div>
      <div className="rightDiv bg-[#fff] p-4 w-full lg:w-3/5 text-[#1b1dc7] relative lg:absolute right-0">
        <div className="w-[100%] lg:w-[70%] mx-auto pt-[9%]">
          <TitleDesc />
          <NewExpense submittedData = {receiveEnteredData}/>
        
          <br></br>
         <Expenses sendData = {initialDataList} ref={contentRef}/> 
        </div>
      </div>
    </div>
  );
};

export default App;
