
import React from "react";
import { Box } from "@mui/material";
import Job from "./Job";
import AddJob from "./AppJob";


const JobList = () => {
    return (
        <Box flex={4} p={2}>

            <Job/>
            
            <Job/>
            
            <Job/>
            
            <Job/>
            <Job/>
            
            <Job/>
            
            <Job/>
            

           <AddJob/>
        </Box>
    )
}

export default JobList;