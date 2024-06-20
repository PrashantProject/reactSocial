
import './App.css';

import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import {Box, Stack }from '@mui/material';
import JobList from './components/JobList';

import UserList from './components/network/UserList';
import UserProfile from './components/network/UserProfile';

function App() {
  return (
  
    <Box>
      <Navbar/>
    <Stack direction="row" spacing={2} justifyContent={"space-between"}>
     <Sidebar/>
       {/* <Feeds /> */}
       {/* <JobList/> */}
        <UserList/>
     <Rightbar />
     </Stack>
     </Box>
    
 
  );
}

export default App;
