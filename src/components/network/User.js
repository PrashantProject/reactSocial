import React from "react";
import { List, ListItem, Divider, Avatar, ListItemAvatar, Typography, Stack} from "@mui/material";



const User=()=>{
    return(
        <List sx={{ widh:"100%0", bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
          </ListItemAvatar>
          <Stack sx={{display:"flex", flexDirection:"column"}}>
         <Typography variant="p" sx={{fontSize:"15px", marginBottom:"5px"}} >Prashant </Typography>
         <Typography variant="p" sx={{fontSize:"12px"}}>Student</Typography>
         </Stack>
        </ListItem>
        
        <Divider variant="inset" component="li" />
       
      </List>
    )
}

export default User;