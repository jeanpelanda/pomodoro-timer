import styled from 'styled-components'

export const HomeContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

const BaseContdownButton = styled.button`
  align-items: center;
  border-radius: 8px;
  border: 0 none;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  transition: 0.3s;
  width: 100%;
`

export const StartContdownButton = styled(BaseContdownButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StopContdownButton = styled(BaseContdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
