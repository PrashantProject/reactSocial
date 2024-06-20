import { AppBar, styled, Toolbar, Typography, Avatar, Box, Stack, Menu, MenuItem, TextField} from "@mui/material";
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
        <AppBar position="sticky">
        <StyledToolBar>
           <Typography variant="h6">P K</Typography>
           <Box >
           </Box>
           <Avatar onClick={e=>setOpenMenu(true)} alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" />

           
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