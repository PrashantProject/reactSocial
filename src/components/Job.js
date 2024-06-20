import React, { useState } from "react";
import { List, ListItem, Divider, Box ,Typography, Avatar, ListItemAvatar, Stack , SwipeableDrawer , Button} from "@mui/material";
import TodayIcon from '@mui/icons-material/Today';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useSlots } from "vue";


const Job =()=>{

  const [jobDetailModel, setjobDetailModel]=useState(false);
    return (
        <Box  >
      <List onClick={e=>setjobDetailModel(true)} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" />
        </ListItemAvatar>
        <Stack sx={{display:"flex", flexDirection:"column"}}>
         <Typography variant="p" sx={{fontSize:"18px", marginBottom:"5px"}} >Job Role</Typography>
         <Typography variant="p" sx={{fontSize:"15px"}}><ApartmentIcon sx={{fontSize:"15px"}}/>Company Name</Typography>
         <Typography variant="p" sx={{fontSize:"15px"}}><PersonPinCircleIcon sx={{fontSize:"15px"}}/>Location Delhi India</Typography>
         <Typography variant="p" sx={{fontSize:"14px", padding:"4px"}}> <TodayIcon sx={{fontSize:"14px"}}/>12 jun 2024</Typography>
         </Stack>
      </ListItem>
    
      <Divider variant="inset" component="li" />
      </List>
 

      <SwipeableDrawer sx={{height:"400px"}}
            anchor="bottom"
            open={jobDetailModel}
             onClose={e=>setjobDetailModel(false)}
            // onOpen={toggleDrawer(anchor, true)}
          >
                <List onClick={e=>setjobDetailModel(true)} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" />
        </ListItemAvatar>
        <Stack sx={{display:"flex", flexDirection:"column"}}>
         <Typography variant="p" sx={{fontSize:"18px", marginBottom:"5px"}} >Job Role</Typography>
         <Typography variant="p" sx={{fontSize:"15px"}}><ApartmentIcon sx={{fontSize:"15px"}}/>Company Name</Typography>
         <Typography variant="p" sx={{fontSize:"15px"}}><PersonPinCircleIcon sx={{fontSize:"15px"}}/>Location Delhi India</Typography>
         <Typography variant="p" sx={{fontSize:"14px", padding:"4px"}}> <TodayIcon sx={{fontSize:"14px"}}/>12 jun 2024</Typography>
         </Stack>
      </ListItem>
    
      <Divider variant="inset" component="li" />
      <Typography variant="p" sx={{fontSize:"15px"}}>There are many variations of passages of
       Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't 
       look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making 
        this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
         sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.</Typography>
      </List>
      <Button fullWidth sx={{marginTop:2}} variant="contained" bgcolor="blue">Apply</Button>
          </SwipeableDrawer>

        </Box>
    )
}

export default Job;