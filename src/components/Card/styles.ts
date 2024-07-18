import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
  /* width: 100%; */
  /* max-width: 256px; */
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  background: ${props => props.theme["base-card"]};

  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
`;

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
`;

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`;

export const TitleCard = styled.h3`
  margin-top: 1rem;

  color: ${props => props.theme["base-subtitle"]};
  ${mixins.fonts.titleS}
`;

export const DescriptionCard = styled.span`
  margin-top: 0.5rem;
  /* width: 100%; */

  color: ${props => props.theme["base-label"]};
  ${mixins.fonts.textS}
`;

export const FooterControlCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const PriceLabel = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    color: ${props => props.theme["base-text"]};
    ${mixins.fonts.textS}
  }

  span:last-child {
    color: ${props => props.theme["base-text"]};
    ${mixins.fonts.titleM}
  }
`;

export const OrderContainer = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    background-color: ${props => props.$itemAdded ? props.theme["yellow-dark"] : props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 0.5rem;
    transition: background-color 0.2s;
    border: none;
    cursor: ${props => props.$itemAdded ? 'not-allowed' : 'pointer'};

    &:hover {
      background-color: ${props => props.$itemAdded ? props.theme.yellow : props.theme.purple};
    }
  }
`;