import React from "react";
import User from "./User";
import { Box } from "@mui/material";
import { WidthFull } from "@mui/icons-material";


const UserList=()=>{
    return(
        <>
        <Box  sx={{Width:"100%"}}>
        <User/>
     <User/>
     <User/>
     <User/>
     <User/>
        </Box>
    
        </>
   
    )
}

export default UserList;