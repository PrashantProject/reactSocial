import { AppBar, styled, Toolbar, Typography, Avatar, Box, Stack, Menu, MenuItem} from "@mui/material";
import React, { useState } from "react";
import HouseIcon from '@mui/icons-material/House';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';

const StyledToolBar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"

})


const Navbar=()=>{
    const [openMenu, setOpenMenu]= useState(false);
    return (
        <AppBar position="stick">
        <StyledToolBar>
           <Typography variant="h6">P K</Typography>
           <Box >
    <Stack direction="row" spacing={9} justifyContent={"space-between"}  alignItems={'center'}>
           <Typography variant="p"  sx={{
           display:{xs:"none", sm:"block"}
          }}> <HouseIcon/>Home</Typography>
          <HouseIcon sx={{
           display:{xs:"block", sm:"none"}
          }}/>


           <Typography variant="p"  sx={{
           display:{xs:"none", sm:"block"}
          }}><BusinessCenterIcon/>Job</Typography>
         <BusinessCenterIcon sx={{
           display:{xs:"block", sm:"none"}
          }}/>


           <Typography variant="p"  sx={{
           display:{xs:"none", sm:"block"}
          }}><GroupIcon/>Network</Typography>
          <GroupIcon  sx={{
           display:{xs:"block", sm:"none"}
          }}/>
           </Stack>

           </Box>
           <Avatar onClick={e=>setOpenMenu(true)} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

           
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={openMenu}
        onClose={e=>setOpenMenu(false)}

        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

      </AppBar>
        
    )
}


export default Navbar;