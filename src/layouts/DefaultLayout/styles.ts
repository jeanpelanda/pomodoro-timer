import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  max-width: 74rem;
  padding: 2rem;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      align-items: center;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      color: ${(props) => props.theme['gray-100']};
      display: flex;
      height: 3rem;
      justify-content: center;
      transition: 0.2s;
      width: 3rem;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
