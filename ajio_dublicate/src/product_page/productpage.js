import React,{useEffect} from 'react'
import { action } from '../store/action.js'
import {useDispatch,useSelector} from "react-redux"

export const Productpage = () => {
  const[mydata,setMydata] = React.useState([]);
let dispatch = useDispatch()
let data = useSelector((storedata)=>(storedata.data))
 function clicked(){
  fetch(`https://fakestoreapi.com/products/category/men's clothing`)
  .then(res=>res.json())
  .then(json=>(action(json,dispatch)))
          }
  return (
    <div><button onClick={clicked}>click</button></div>
  )
}
