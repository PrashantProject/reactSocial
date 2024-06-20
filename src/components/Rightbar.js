import { Box, Typography } from "@mui/material";
import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Rightbar=()=>{
    const itemData=['https://cdn.pixelbin.io/v2/dummy-cloudname/EEM2O3/original/619340761ca096a589ca891f/6543970a3eb1cdf42c3c0e71_Unblur%20Your%20World-%20Try%20Our%20Sharpness%20Tool%20.webp','https://imgv3.fotor.com/images/share/Sharpen-images-online-easily-and-quickly-with-Fotors-free-AI-image-sharpener.jpg','https://ik.imagekit.io/ikmedia/backlit.jpg','https://www.akamai.com/site/im-demo/media-viewer/01.jpg?imwidth=5000', 'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896', 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg']
    return (
      <Box flex={2}  p={2}  sx={{
        display:{xs:"none", sm:"block"}
       }}>

 <Typography variant="p">Images</Typography>
<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item}>
      <img
        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item}?w=164&h=164&fit=crop&auto=format`}
        alt={item}
        loading="lazy"
      />
       console.log(item)
    </ImageListItem>
  ))}
</ImageList>
       </Box>
    )
}


export default Rightbar;