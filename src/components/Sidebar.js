import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import ListItemIcon from '@mui/material/ListItemIcon';
import React from "react";
import HouseIcon from '@mui/icons-material/House';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';


const Sidebar = () => {

    return (

        <Box flex={1} p={2} sx={{
            display: { xs: "none", sm: "block" }
        }}>

<Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HouseIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BusinessCenterIcon  />
                        </ListItemIcon>
                        <ListItemText primary="Job" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Network" />
                    </ListItemButton>
                </ListItem>


            </List>

            </Box>
        </Box>
    )
}


export default Sidebar;