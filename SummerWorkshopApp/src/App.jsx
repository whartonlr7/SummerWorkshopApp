import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import SchedulePage from './pages/SchedulePage';


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


import React from 'react'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={ <HomePage/> } />
      <Route path='/schedule' element={ <SchedulePage/> } />
      <Route path='/directory' element={ <DirectoryPage/> } />
    </Route>
)
)
const App = () => {
  return <RouterProvider router={router}/>
}

export default App

