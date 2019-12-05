import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  margin-bottom: 20px;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 12px #ebedf0;
`

export default ({ children }) => <Card>{children}</Card>
