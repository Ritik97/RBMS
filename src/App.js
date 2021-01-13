import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Main from './components/Index/main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
