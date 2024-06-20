
import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import AddPost from "./AddPost";


const Feeds = () => {
    return (
        <Box flex={4} p={2}>

            <Post/>
            
            <Post/>
            
            <Post/>
            
            <Post/>
            
            <AddPost/>
        </Box>
    )
}

export default Feeds;