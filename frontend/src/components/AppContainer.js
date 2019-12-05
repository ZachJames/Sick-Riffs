import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.main`
  margin-left: 180px;
  padding: 55px;
`

export default ({ children }) => <AppContainer>{children}</AppContainer>
