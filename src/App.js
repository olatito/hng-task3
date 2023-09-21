// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./views/Dashboard/Dashboard";
// import GalleryGrid from "./components/gallery/GalleryGrid/GalleryGrid";

// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/gallery" element={<GalleryGrid />} />
//           </Routes>
//         </BrowserRouter>
        
//       </div>
//   );
// }

// export default App;

import React, {useState, useEffect} from 'react';
import Home from '../src/components/login/LoginPage/LoginPage';
import Signup from '../src/components/login/LoginPage/LoginPage';
import Login from '../src/components/login/LoginPage/LoginPage';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Dashboard from "../src/views/Dashboard/Dashboard";
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
              <Route path="/gallery" element={<Dashboard />} />                                                                       <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;
