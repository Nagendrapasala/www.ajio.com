import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Box, Image } from '@chakra-ui/react';
import OwlCarousel from 'react-owl-carousel'


const images = [
    "https://assets.ajio.com/cms/AJIO/WEB/29112022-D-MHP-topbanner-midseasonsale-4080.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-MHP-topbannercarousel-p3-categorydays-internationalbrands-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-MHP-topbannercarousel-p1-stealoftheday-sportsshoes-brands-under2299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/01122022-D-MHP-topbannercarousel-p3-categorydays-internationalbrands-upto70.jpg",
    
]

const images2 = [
   " https://assets.ajio.com/cms/AJIO/WEB/D-Payupto5Bankoffer.jpg",
   "https://assets.ajio.com/cms/AJIO/WEB/D-RelianceOne-Bankoffer.jpg"
]

const responsive = {
    responsiveClass: true,
    loop:true,
    autoplay:true,
    nav: true,
    margin: 10,
    smartSpeed: 300,
    navClass: ['prev', 'next'],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
       
        }
    },
}


export const HomePage = () => {

  return (
    <div>
    <Box width="100%" margin="auto" cursor="pointer" >
        <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme" >
            {images.map((img)=>(
                <Box key={img} className='hover-underline-banner' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
    <Box width="100%" margin="auto" cursor="pointer">
    <Box width="100%" >
        <OwlCarousel {...responsive} className="owl-theme" >
        {images2.map((img)=>(
            <Box key={img} className='hover-underline-banner' width="100%" margin="auto" mt={10} >
                <Image w="1434px"  height= "123px" marginTop= {{base: "-45px"}} src={img} />
            </Box>
        ))}
        </OwlCarousel>
    </Box>
    
</Box>
            <div className="bag_section_banner" style = {{marginTop: "10px", cursor: "pointer"}}>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-opt-1.gif" width= "1440px"height = "90" alt="" />
            </div>
</div>
  )
}