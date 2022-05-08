import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import dailyDataTemp from './SampleData'
import * as Mui from '@mui/material';


function App() {

  const [dailyData, setDailyData] = useState()

  useEffect(() => {
   
    if (localStorage.getItem("dailyData") === null) {
      localStorage.setItem("dailyData",JSON.stringify(dailyDataTemp))
    }

    else
    {
      var temp =  localStorage.getItem("dailyData")
    
    setDailyData(JSON.parse(temp))
    console.log(dailyData)

      
    }

    
  }, [])
  return (
    <div >

     <Mui.Button variant="contained">Test</Mui.Button>
    </div>
  );
}

export default App;
