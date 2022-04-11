import React, { useState }  from "react";
import Classcomponent from "./Components/Classcomponent";
import Functioncomponent from "./Components/Functioncomponent";

const App=()=>{


  const[show,setShow]=useState(false)
  return(
    <>
        <button onClick={()=>setShow(!show)}>Click to conditionally render the component</button>
        {show?<Functioncomponent/>:<Classcomponent/>}
    
    </>
  )

}


export default App