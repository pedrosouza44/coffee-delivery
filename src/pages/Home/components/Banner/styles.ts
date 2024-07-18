import styled from "styled-components";

export const BannerContainer = styled.div`
  /* width: 100%; */
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 4rem 0;
`;

export const TextContainer = styled.div`
  max-width: 36rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  color: ${props => props.theme["base-title"]};
  line-height: 130%;
  font-weight: 800;
  padding-bottom: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${props => props.theme["base-subtitle"]};
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: flex-start;

  padding-top: 4rem;

  /* > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  } */
`;

const ITEM_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface ItemProps {
  itemColor: keyof typeof ITEM_COLORS;
}

export const ItemContent = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0.5rem; */

    background: ${props => props.theme[ITEM_COLORS[props.itemColor]]};
    color: ${props => props.theme.background};
    border-radius: 999px;

    svg {
      padding: 0.5rem;
    }
  }
`;