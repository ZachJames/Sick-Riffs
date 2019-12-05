import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.main`
  margin-left: 180px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const Wrapper = styled.div`
  background-color: #fff;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 55px;
`

export default ({ children }) => (
  <AppContainer>
    <Wrapper>{children}</Wrapper>
  </AppContainer>
)
