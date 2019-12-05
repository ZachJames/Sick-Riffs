import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import AppContainer from './components/AppContainer'
import { HomePage, Error404Page } from './pages'

function App() {
  return (
    <div>
      <Navbar />
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={Error404Page} />
          </Switch>
        </BrowserRouter>
      </AppContainer>
    </div>
  )
}

export default App
