import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Tic_layout  from './Components/Tic_layout'
import Home from './Components/Home'

const App = () => {

    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Play" element={<Tic_layout />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  
}

export default App
