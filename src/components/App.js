
import React from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = React.useState(null)
  React.useEffect(()=>{
  setData({ temperature: 25, conditions: "Sunny" })
},[])
  return (
    
    <div>
        {/* Do not remove the main div */}
     {data&&  <WeatchDisplay data={data}/>}
    
    </div>
  )
}

export default App
