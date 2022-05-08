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
import ListCard from './components/ListCard';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';


function App() {

  const [dailyData, setDailyData] = useState()

  useEffect(() => {

    if (localStorage.getItem("dailyData") === null) {
      localStorage.setItem("dailyData", JSON.stringify(dailyDataTemp))
    }

    else {
      var temp = localStorage.getItem("dailyData")

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
      <Grid container >
        <Grid item xs={100} md={4} lg={3}>
          <Card variant="outlined" sx={{backgroundColor:"info.main", margin:"1em"}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Current Balance
              </Typography>
              <Typography variant="h5" component="div" sx={{color:"white"}}>
                153873.56 LKR
              </Typography>
             
            </CardContent>
          
          </Card>
        </Grid>
      </Grid>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        lg={{justifyContent:"flex-start"}}
      >
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard /> <ListCard /> <ListCard /> <ListCard />
      </Stack>


    </div>
  );
}

export default App;
