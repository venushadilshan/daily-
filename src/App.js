import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import dailyDataTemp from './SampleData'
import * as Mui from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




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

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
            
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Daily
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default App;
