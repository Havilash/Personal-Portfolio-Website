import React, { useState, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from 'src/components/Footer/Footer';

import Nav from 'src/components/Nav/Nav'
import SortAlgorithm from 'src/components/SortAlgorithm/SortAlgorithm';
// Pages
import Error404 from 'src/pages/errors/Error404';
import Home from 'src/pages/Home/Home';
import Career from 'src/pages/Career/Career';
import Skills from 'src/pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import ProjectDocument from './pages/documents/ProjectDocument';


function App() {
  const location = useLocation()

  return (
    <div className="app relative h-auto w-full">
      <Nav />
      { 
        (location.pathname !== "/") &&
        <SortAlgorithm sorted={true} className="rotate-180 absolute top-0 left-0 -z-50" />
      }
      
      <main className='content h-auto w-full flex justify-center items-center z-10'>
        <Routes>
          <Route exact path="/*" element={<Error404/>} />
          <Route path="/projects/:project/document/" element={<ProjectDocument/>} />

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/career" element={<Career/>} />
          <Route exact path="/skills" element={<Skills/>} />
          <Route exact path="/projects" element={<Projects/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
