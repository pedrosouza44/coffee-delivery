import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;

      padding: 0.5rem;
      border-radius: 8px;
      font-size: 0.875rem;
      line-height: 130%;

      background: ${props => props.theme["purple-light"]};
      color: ${props => props.theme["purple-dark"]};

      svg {
        color: ${props => props.theme.purple}
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      text-decoration: none;
      padding: 0.5rem;
      border-radius: 6px;
      
      background: ${props => props.theme["yellow-light"]};
      color: ${props => props.theme["yellow-dark"]};

      &[aria-disabled='true'] {
      pointer-events: none;
      }

      span {
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(50%, -50%);

        ${mixins.fonts.textS}
        font-weight: bold;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme["yellow-dark"]};
        border-radius: 50%;
      }
    }
  }
`;