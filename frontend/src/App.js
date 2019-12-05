import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'
import Navbar from './components/Navbar'
import AppContainer from './components/AppContainer'
import { HomePage, SignupPage, Error404Page } from './pages'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <AppContainer>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={Error404Page} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </>
  )
}

export default App
