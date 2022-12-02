import React from 'react';
import {Routes, Route} from "react-router-dom";


export default function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path = "/shop/men" ></Route>
          <Route path = "/shop/women" ></Route>
          <Route path = "/shop/kids"></Route>
          <Route path = "/shop/indie"></Route>
          <Route path = "/shop/home"></Route>
      </Routes>
    </div>
  )
}
