import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id = "navbar" style = {{width: "1440px", height: "90px", borderTop: "3px solid #2c4152", backgroundColor: "#fff",fontFamily: "SourceSansPro", boxShadow: "0 3px 6px 0 rgb(0 0 0 / 20%)", borderBottom: "1px solid #e0e0e0"}}>
        <div id = "ajio_logo" style = {{display: "flex", alignItems: "flex-start", marginLeft: "127px"}} >
            <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" width = "130px" height = "38px" alt="" style = {{boxSizing: "border-box", margin: "24px 0px 0px", cursor: "pointer"}} />
        </div>
        <div className='nav_header_right' style = {{width: "712px", height: "40px" , display: "flex" ,fontFamily: "SourceSansPro",  marginLeft:"260px"}}>
               
                <div className='space_box' style= {{height: "40px", width: "220px"}}>

                </div>
                <div className='nav_links' style = {{display: "flex", justifyContent: "space-between", alignContent: "center", width: "492px"}}>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>MEN</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>WOMEN</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>KIDS</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>INDIE</Link>
                    <Link to = "" style = {{textDecoration: "none", color: "#333", fontFamily: "SourceSansPro", fontSize: "15px"}}>HOME AND KITCHEN</Link>
                </div>
        </div>

    
    </div>
        
  )
}
