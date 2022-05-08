import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import dailyDataTemp from './SampleData'


function App() {

  useEffect(() => {
   console.log(JSON.stringify(dailyDataTemp))
    if (localStorage.getItem("dailyData") === null) {
      localStorage.setItem("dailyData",JSON.stringify(dailyDataTemp))
    }

    var temp =  localStorage.getItem("dailyData")
    console.log(JSON.parse(temp))

  }, [])
  return (
    <div >

      <button >Add</button>
    </div>
  );
}

export default App;
