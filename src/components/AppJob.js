import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box ,Typography, styled, Avatar, TextField, Stack , Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';


const AddJob=()=>{
    const [addJobModel, setaddJobmodel]= useState(false);

    const StyelModal=styled(Modal)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    })

    const  UserBox= styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        

    })


    return(
        <>
        <Tooltip title="add" sx={{position:"fixed", bottom:20, left:10}}>
        <Fab color="secondary" aria-label="add">
            <AddIcon onClick={e=>setaddJobmodel(true)}/>
        </Fab>
       </Tooltip>



<StyelModal
  open={addJobModel}
  onClose={e=>setaddJobmodel(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={430} borderRadius={5} p={3} bgcolor="white">
  <Typography id="modal-modal-title" variant="h6" component="h2">
      Creat Job
    </Typography>
    <UserBox>
    <Avatar  alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" />
    <Typography id="modal-modal-title" variant="p" component="p">
      Prashant
    </Typography>
    </UserBox> 
  
    <Stack  gap={2} mt={2} color='blue'>
    <TextField sx={{marginTop:"10px"}}
          required
          id="outlined-required"
          label="Titel"
          placeholder="Please Enter Job Titel"
        />
          <TextField
          required
          id="outlined-required"
          label="Company Name"
          placeholder="Please Enter Company Name"
        />
        <TextField
          required
          id="outlined-required"
          label="LocatDion"
          placeholder="Please Enter Job Location"
        />

<TextField
          required
          id="outlined-required"
          label="Discription"
          placeholder="Enter Job Discripetion"
        />

   </Stack>
   <Button fullWidth sx={{marginTop:2}} variant="contained" bgcolor="blue">Submit</Button>
  </Box>
  
</StyelModal>
</>
    )
}

export default AddJob;