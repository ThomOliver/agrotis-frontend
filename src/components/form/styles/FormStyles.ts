import styled from 'styled-components'
import { Container, Box } from '@mui/material'

export const StyledContainer = styled(Container)`
  margin-top: 2rem;
`

export const Row = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > * {
    flex: 1;
    min-width: 250px;
  }
`
