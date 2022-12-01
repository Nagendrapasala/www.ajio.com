import React,{useEffect, useState} from 'react'
import { action } from '../store/action.js'
import {useDispatch,useSelector} from "react-redux"
import "./style.css"
import {Display} from "./Display.js"
import { AccordionItem1 } from './AccordionItem.js'
import {
  MinusIcon,
  AddIcon,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Divider,
} from '@chakra-ui/react'

let mainproduct = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "70px",
  padding: "50px",
}
let mainproductfour = {
  width: "80%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "10px 10px",
  padding: "30px",
}
export const Productpage = () => {
  const[mydata,setMydata] = useState([]);
  const[check,setCheck] = useState(true);
let dispatch = useDispatch()
let data = useSelector((storedata)=>(storedata.data))
useEffect(()=>{
  if(data.length===0){
  fetch(`http://localhost:3000/data`)
  .then(res=>res.json())
  .then(json=>(action(json,dispatch),setMydata(json)))
  }
  
},[])
let filter_names = ["Gender","Category","Price","Discount","Brand","Size"]

function three(){
  setCheck(true);
}
function four(){
  setCheck(false)
}
function Highprice(){
  data.sort((a,b)=>(b.price-a.price))
  setMydata(data)
}
function Lowprice(){
  data.sort((a,b)=>(a.price-b.price))
  setMydata(data)
}
function Relevance(){
  setMydata(data)
}
function Discount(){
 data.sort((a,b)=>(b.offer_percent-a.offer_percent))
  setMydata(data)
}
let product_filter = {
  Gender : ["Male","FeMale"],
  Category : ["Tshirts","Track Pants","Sneakers & Sports Shoes","Shorts & 3/4ths","Sweatshirt & Hoodies","Jackets & Coats","Flip Flop & Slippers","Bags,Belts & Wallets"],
  Price:["Below 500","500-1000","1001-1500","1501-2000","2001-2500","Above 2500"],
  Brand:['PUMA','LEVIS','ADIDAS'],
  Discount:['21-30%','31-40%','41-50','51-80%','Free'],
  Size:['S','M','L','XL','XXL','XXXL']
}
  return (
    <div id='parent'>
      <div id='sidebar'>
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight = 'bold' fontSize= "25px">
          Refine By
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    {filter_names.map(e=>(<AccordionItem1 name={e} array={product_filter.Price} />))}
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          More Filters
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>

  </AccordionItem>
</Accordion>
      </div>
      <div id='mainbar'>
        <div className='navbar'>
          <div>
            <span style={{fontWeight : "bold"}}>{data.length} items found</span>
          </div>
          <div>
            <span>Grid &ensp;</span>
            <button onClick={three} className='three'>
            <button></button><button></button><button></button>
            </button>
            
            <button onClick={four} className='four'>
              <button></button><button></button><button></button><button></button>
            </button>
          </div>
          <div>
          <Menu>
  <MenuButton as={Button} >
    SORT BY
  </MenuButton>
  <MenuList>
    <MenuItem><button onClick={Highprice}>price(high to low)</button></MenuItem>
    <MenuItem><button onClick={Relevance}>Relevance</button></MenuItem>
    <MenuItem><button onClick={Discount}>Discount</button></MenuItem>
    <MenuItem><button onClick={Lowprice}>price(low to high)</button></MenuItem>
  </MenuList>
</Menu>
          </div>
          
        </div>
        {mydata.length>0?
        <div  style={check?mainproduct:mainproductfour}>
        {mydata.map(e=>(<Display image={e.image[0]} title={e.title} price={e.price} Brand={e.brand} offer={e.offer_percent} key={e.id}/>))}
        </div>:<div>LOADING...</div>}
        
      </div>
    </div>
  )
}
