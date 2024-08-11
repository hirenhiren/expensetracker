import { useState } from "react";

const DummyPostMan = () =>{

    const[userName, setUserName] = useState("");

    const nameChangeHandler = (event) =>{
        setUserName(event.target.value);
    }
    const formSubmitHandler = async (event) =>{
        event.preventDefault();
       
        try{
          let reponseData = await fetch('http://localhost:3000/users',{
             method:'POST',
             headers:{
                'Content-Type':'application/json'
             },
             body:JSON.stringify({name:userName})
          })
          if(!reponseData.ok){
            throw new Error('Network response')
          }
          const data = await reponseData.json();
          console.log('Success:', data);
          setUserName('');
        }
        catch(error){
            console.error('Error:', error);
        }
        
    }
    

    return(
        <div>
            <h2> Dummy Post Man </h2>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="userName"> Enter your Name </label>
                <input type="text" name="userName" value={userName} onChange={nameChangeHandler}/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default DummyPostMan