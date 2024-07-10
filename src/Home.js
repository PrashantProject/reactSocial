import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";
import { Outlet} from "react-router";

import { useNavigate } from "react-router";

const Home=()=>{
  const navigat=useNavigate();
  useEffect(()=>{
   if(!localStorage.getItem('token')){
     return navigat('/login')
   }
},[])
    const [mode, setMode] = useState("light");
  
    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });
    return (
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
            <Outlet></Outlet>
            <Rightbar />
            
          </Stack>
          <AddPost />
        </Box>
      </ThemeProvider>
       
    ) 
}

export default Home