import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Container, Box, CardMedia,styled, Chip, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const ProfileCard = styled(Card)(({ theme }) => ({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
    position: 'relative',
  }));
  
  const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: 100,
    height: 100,
    margin: 'auto',
    position: 'absolute',
    top: theme.spacing(6),
    left: '50%',
    transform: 'translateX(-50%)',
    border: `4px solid ${theme.palette.background.paper}`,
  }));


const UserProfile=()=>{
    return (
        <Container maxWidth="md">
        <ProfileCard>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" // Replace with your cover image URL
            alt="Cover Image"
          />
          <ProfileAvatar alt="User Name" src="https://plus.unsplash.com/premium_photo-1667055670847-14e0dbe20ed5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8" />
          <CardContent style={{ marginTop: 60 }}>
            <Typography variant="h5" component="div" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Software Engineer at XYZ Corp
            </Typography>
            <Box mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Location:</Typography>
                  <Typography variant="body2" color="textSecondary">
                    San Francisco, CA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body2" color="textSecondary">
                    john.doe@example.com
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Phone:</Typography>
                  <Typography variant="body2" color="textSecondary">
                    +1 234 567 890
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Website:</Typography>
                  <Typography variant="body2" color="textSecondary">
                    www.johndoe.com
                  </Typography>
                </Grid>
              </Grid>
             
            </Box>
            <Stack direction={'row'} justifyContent={"space-between"} mt={2} alignItems={"center"} alignContent={"center"}>
            <Chip icon={<AddIcon sx={{color:"white"}}/>} label="follow"   color="primary" sx={{width:"45%", color:"white"}}  />
            <Chip label="..."  sx={{width:"45%"}}/>
            </Stack>
          </CardContent>
        </ProfileCard>
      </Container>
    )
}

export default UserProfile;