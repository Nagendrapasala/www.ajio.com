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

const images3 = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-p1-bestofwinter-upto75.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-westernwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-ethnicwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-footwear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Kidswear.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Home&Kitchen.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Acessories.jpg"
    
]

const images4 = [
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p2-vanheusen-min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p3-andglobaldesi-brands-min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p4-weddingcollection-brands-min65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p5-leewrangler-brands-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p5-leewrangler-brands-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p6-westerndresses-brands-starting499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1122022-d-uhp-JIT-p7-innerwear-brands-starting199.jpg"
    
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
            <div className="brands_section_banner">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-Header.jpg" alt="" />

            </div>
            <div className="brands_section" style = {{display: "flex", animation: "ease-out", cursor: "pointer"}}>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg" alt="" /></div>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Bestsellers-Header.jpg" alt="" />
            </div>
            <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme" >
            {images3.map((img)=>(
                <Box key={img} className='hover-underline-banner' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
        <div className="ajio_exclusive_section" style = {{marginTop: "4px"}}>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-Header.jpg" alt="" />
        </div>
        <div className="exclusive_section" style = {{display: "flex", animation: "ease-out", cursor: "pointer"}}>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p3-Avaasa.jpg" alt="" /></div>
                <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg" alt = "" /></div>
            </div>
        <div className="shineStyle_banner">
                <div><img src="https://assets.ajio.com/cms/AJIO/WEB/D-JIT-Header.jpg" alt="" /></div>

        </div>

        <Box width="100%" margin="auto" cursor="pointer" >
            <Box width="100%" >
            <OwlCarousel {...responsive} className="owl-theme" >
            {images4.map((img)=>(
                <Box key={img} className='hover-underline-banner' width="100%" margin="auto" mt={10} >
                    <Image w="1468px"  height= "450px" marginTop= {{base: "-45px"}} src={img} />
                </Box>
            ))}
            </OwlCarousel>
        </Box>
        
    </Box>
    <div className="ajioService_banner">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-header.jpg" alt="" />
    </div>
    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-AJioservice-Nextday.jpg" alt="" />
    </div>
    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-Header.jpg" alt="" />
    </div>
    <div className="latest_launches">
        <img src="https://assets.ajio.com/cms/AJIO/WEB/2022_GAP_AJIO_Cozy%20Club_Desktop_w1440px%20X%20h470px_Unisex.jpg" alt="" />
    </div>

    <div className = "latestLauch_section" style = {{display: "flex", overflow: "auto", whiteSpace: "nowrap"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-lancer-neqw.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p3-truereligion-new.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-710-new.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-LatestLaunches-KendallKylie.jpg"  alt = "" /></div>
        {/* <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p1-Acai-new.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-Latestlaunches-p2-FyreRose-new.jpg"  alt="" /></div> */}
               
    </div>

    <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-Header.jpg" alt="" />
    </div>
    <div className="westernWear_wonders" style = {{display: "flex"}}>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p1-starting499.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p2-starting599.jpg" alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p3-starting999.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p4-starting899.jpg"  alt = "" /></div>
        {/* <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p5-min50.jpg"  alt="" /></div>
        <div style = {{marginRight: "0.5px"}}><img src="https://assets.ajio.com/cms/AJIO/WEB/D-westernwear-p6-starting399.jpg"  alt="" /></div> */}
               
    </div>
</div>
  )
}