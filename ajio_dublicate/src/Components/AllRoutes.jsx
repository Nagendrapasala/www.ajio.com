import React from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from './Footer';
import { HomePage } from './HomePage';


export default function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/men" element = {<h1>This is men's component</h1>} />
          <Route path = "/women" element= {<h1>WOMEN</h1>}/>
          <Route path = "/kids" element = {<h1>KIDS</h1>}/>
          <Route path = "/indie" element = {<h1>Indie</h1>}/>
          
      </Routes>
    </div>
  )
}
