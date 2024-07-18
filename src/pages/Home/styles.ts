import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
  /* align-items: flex-start; */

  /* padding-top: 4rem; */
`;

export const CoffeeList = styled.section`
  /* max-width: 72.5rem; */
  padding: 2rem 1.25rem 9.375rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme['base-subtitle']}
  }
`
