import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

const Feed = () => {
  const navigat = useNavigate();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts]=useState([]);
  const token = localStorage.getItem("token")

  const post =async()=>{
    try {
     // const respon=await axios.get("https://socialbackend-426x.onrender.com/post",{ headers: { Authorization : token } })
     const respon=await axios.get("http://localhost:8000/post",{ headers: { Authorization : token } })
      if(respon?.data){
        setPosts(respon?.data?.data.post)
        setLoading(false);
        console.log(respon?.data?.data.post)
       
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      });
      if(error.response.data.statusCode==401){
        localStorage.removeItem("token")
        navigat("/login")
      }
    }
  }
  useEffect(() => {
    post();
  },[])

  // console.log(posts.post);
  // setTimeout(() => {
  //   setLoading(false);
  // }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
       {posts.map((item, index) => (
        <Post key={index} item={item} />
      ))}
         
        </>
      )}
      <ToastContainer/>
    </Box>
  );
};

export default Feed;