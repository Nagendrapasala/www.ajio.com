
import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    const openDrawer = () => {
        
        document.getElementsByClassName("drawer")[0].style.visibility = "visible";
    }
    const closeDrawer = () => {
        document.getElementsByClassName("drawer")[0].style.visibility = "hidden";
    }
  return (
    <div id = "navbar" style = {{width: "1440px", height: "90px", borderTop: "3px solid #2c4152", backgroundColor: "#fff",fontFamily: "SourceSansPro", boxShadow: "0 3px 6px 0 rgb(0 0 0 / 20%)", borderBottom: "1px solid #e0e0e0"}}>
        <div id = "ajio_logo" style = {{display: "flex", alignItems: "flex-start", marginLeft: "127px"}} >
            <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" width = "130px" height = "38px" alt="" style = {{boxSizing: "border-box", margin: "24px 0px 0px", cursor: "pointer"}} />
        </div>
        <div className='nav_header_right_outer' style = {{  display: "flex", flexDirection: "row"}}>
            <div className='nav_header_right' style = {{width: "712px", height: "40px" , display: "flex" ,fontFamily: "SourceSansPro",  marginLeft:"260px",  marginTop: "-5px"}}>
               
                <div className='space_box' style= {{height: "40px", width: "200px"}}>

                </div>
                <div className='nav_links' style = {{display: "flex", justifyContent: "space-between", alignContent: "center", width: "492px"}}>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}} onMouseEnter = {openDrawer} onMouseLeave = {closeDrawer}>MEN</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>WOMEN</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>KIDS</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>INDIE</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>HOME AND KITCHEN</Link>
                </div>
                
            </div>
            <div className='nav_searchbar' style = {{display: "flex"}}>
                <input type="text" placeholder='Search AJIO' style ={{paddingLeft: "12px", paddingRight: "17px", height: "20px", width: "269px", paddingTop: "12px", marginLeft: "2px", marginTop: "-10px", borderRadius: "17px", border: "1px solid #2c4152", fontFamily: "Helvetica,sans-serif", backgroundColor: "#fffded", fontSize: "14px" }}/>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydbUMW2Zs1TT-YXZ_H7D3xwSOh8nPwwD5Rg&usqp=CAU" height= "25px" alt="" style ={{position: "absolute", marginLeft: "-40px", marginTop: "-6px" }}/></div>
            </div>
            <div className='nav_buttons' style = {{display: "flex", width: "100px", justifyContent: "space-evenly", alignItems: "center", marginTop: "-25px"}}>
                <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
                <div className='icon_cart' style = {{backgroundColor: "#2A3F51", height: "34px", width:"34px", borderRadius: "17px"}}>
                  
                </div>

            </div>
            
        </div>
        <div className='guest_header' style = {{display: "flex", flexDirection: "row-reverse" ,width: "500px", justifyContent: "space-evenly" ,alignItems: "center", marginTop: "-90px", marginLeft: "920px"}}>
                    <div></div>
                    <div style = {{backgroundColor: "black", padding: "5px 10px 7px"}}><Link to = "" style = {{textDecoration: "none", color: "#fff", fontFamily: "SourceSansPro", fontSize: "12px"}}>Vist AJIOLUXE</Link></div>
                    <div><Link to = " " style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>Customer Care</Link></div>
                    <div><Link to = " " style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>Sign Out</Link></div>
                    <div><Link to = "" style = {{textDecoration: "none", color: "#3E5060", fontFamily: "SourceSansPro", fontSize: "12px"}}>My Account</Link></div>
                    
                   
                    
        </div>
        
            
            <div className= "drawer" style = {{width: "75%" ,height: "500px", backgroundColor: "black", margin: "auto", marginTop: "70px",visibility: "hidden"}}>

            </div>
    
    </div>
    

    
        
  )
}

