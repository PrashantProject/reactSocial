
import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box ,Typography, styled, Avatar, TextField, Stack , Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';


const AddPost = () => {

    const [addPostModel, setaddpostmodel]= useState(false);
    const StyelModal=styled(Modal)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    })

    const  UserBox= styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        margin:"10px"
    })
    return (
        <>
            <Tooltip title="add" sx={{position:"fixed", bottom:20, left:10}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={e=>setaddpostmodel(true)}/>
                </Fab>
            </Tooltip>


            <StyelModal
  open={addPostModel}
  onClose={e=>setaddpostmodel(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} borderRadius={5} p={3} bgcolor="white">
  <Typography id="modal-modal-title" variant="h6" component="h2">
      Creat Post
    </Typography>
    <UserBox>
    <Avatar  alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" />
    <Typography id="modal-modal-title" variant="p" component="p">
      Prashant
    </Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          placeholder="What's in your mind?"
          multiline
          rows={4}
          sx={{width:"100%"}}
          variant="standard"
        />
    <Stack direction={"row"} gap={2} mt={2} color='blue'>
    <ImageIcon/>
    <VideoCameraBackIcon/>
   </Stack>
   <Button fullWidth sx={{marginTop:2}} variant="contained" bgcolor="blue">Submit</Button>
  </Box>
  
</StyelModal>
        </>
    )
}

export default AddPost;