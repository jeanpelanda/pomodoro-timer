import styled from 'styled-components'

export const ContdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  gap: 1rem;
  line-height: 8rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  width: 4rem;
`
