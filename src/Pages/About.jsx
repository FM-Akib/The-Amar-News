

import Header from "./Header"
import NavBar from "./NavBar"
import { useState } from "react";


import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const About = () => {
    const [value, setValue] = useState(2);
  return (
    <div className="font-popin w-[1400px]  mx-auto">
    <Header/>
    <NavBar/>
    
   {/* review */}
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> </Box>


    </div>
  )
}

export default About