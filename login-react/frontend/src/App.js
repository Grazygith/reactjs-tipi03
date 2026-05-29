import React from 'react'

import Login from './Login'
import Cadastrar from './Cadastrar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/cadastrar' element={<Cadastrar />}></Route>
      <Route path='/home' element={<Home />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;