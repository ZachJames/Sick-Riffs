import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.main`
  margin-left: 200px;
  padding: 10px 15px;
`

export default ({ children }) => <AppContainer>{children}</AppContainer>
