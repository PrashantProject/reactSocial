import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";




const Post = ({ item }) => {
 
  const token = localStorage.getItem("token")
  
  const [user, setUser]= useState( localStorage.getItem("user"))
  const like =async(postID)=>{
    const res =await axios.post(`http://localhost:8000/post/like/${postID}`,{}, { headers: { Authorization : token } })
    
  }


  const unlike =async(postID,likeId)=>{
    const res =await axios.post(`http://localhost:8000/post/unLike/${postID}`,{likeId }, { headers: { Authorization : token } })
  }
  const handleCheckboxChange=(event, itemId, likeId  )=> {
    // Determine if the checkbox is checked or unchecked
    const isChecked = event.target.checked;
  
    if (isChecked) {
      // Call the like function when checked
      like(itemId);
    } else {
      // Call the unlike function when unchecked
      unlike(itemId, likeId);
    }
  }


  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={item.owner.profileImage}>
          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={item.owner.name}
        subheader={item.createdAt}

      />
      { item.file ??
        <CardMedia
        component="img"
        height="20%"
        image={item.file}
        alt="Paella dish"
      />
      }
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.discription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox   onChange={(event) => handleCheckboxChange(event, item._id)}
            icon={<FavoriteBorder />}
            checked={item.like.some(likeObj => likeObj.like === user)}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />{ item.like.length }
         
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;