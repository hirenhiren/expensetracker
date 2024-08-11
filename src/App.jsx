import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleDesc from "./components/TitleDesc";
import HeroContent from "./components/HeroContent";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseDashboard from "./components/ExpenseDashboard";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [initialDataList, setInitialDataList] = useState([]);
  const [editingData, setEditingData] = useState(null); // State to handle the item being edited
  const contentRef = useRef(null);
  const contentTimeLineRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/expenses');
        const data = await response.json();
        setInitialDataList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const receiveEnteredData = async (receiveNewEnteredData) => {
    if (editingData) {
      // Edit existing item
      try {
        const response = await fetch(`http://localhost:3000/expenses/${editingData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(receiveNewEnteredData),
        });

        if (response.ok) {
          setInitialDataList((prevData) =>
            prevData.map((item) => (item.id === editingData.id ? receiveNewEnteredData : item))
          );
          setEditingData(null);
        } else {
          console.error('Failed to update data:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      // Add new item
      try {
        const response = await fetch('http://localhost:3000/expenses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(receiveNewEnteredData),
        });

        if (response.ok) {
          const newData = await response.json();
          setInitialDataList((prevData) => [...prevData, newData]);
          console.log(receiveNewEnteredData);
        } else {
          console.error('Failed to post data:', response.statusText);
        }
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
  };

  const deleteItemHandler = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3000/expenses/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setInitialDataList((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error('Failed to delete data:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const editItemHandler = (item) => {
    setEditingData(item);
  };

  useEffect(() => {
    const elements = gsap.utils.toArray(contentRef.current.querySelectorAll('.animate'));

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 25%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentTimeLineRef.current,
        start: "top 95%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      }
    });
    const elements = gsap.utils.toArray(contentTimeLineRef.current.querySelectorAll('.animateTimeLine'));

    elements.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      );
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen justify-between" ref={contentRef}>
      <div className="leftDiv bg-[#cad7fe] p-4 w-full lg:w-2/5 relative lg:fixed" ref={contentTimeLineRef}>
        <HeroContent />
      </div>
      <div className="rightDiv bg-[#fff] p-4 w-full lg:w-3/5 text-[#1b1dc7] relative lg:absolute right-0">
        <div className="w-[100%] lg:w-[90%] mx-auto pt-[9%]">
          <TitleDesc />
          <NewExpense submittedData={receiveEnteredData} className="animate" initialData={editingData} />
          <br />
          <Expenses onDeleteItem={deleteItemHandler} sendData={initialDataList} className="animate" onEditItem={editItemHandler} />
          <ExpenseDashboard expenses={initialDataList}/>
        </div>
      </div>
    </div>
  );
};

export default App;
