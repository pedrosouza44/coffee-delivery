import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      color: ${props => props.theme.purple};
      transition: all 0.2s;

      &:hover {
        color: ${props => props.theme["purple-dark"]};
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  span {
    padding-top: 2px;
    color: ${props => props.theme["base-title"]}
  }

`;