import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${props => props.theme["base-subtitle"]};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  min-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressConatiuner = styled(FormContainer)``;

const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span{
      color: ${props => props.theme["base-subtitle"]};
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`;

export const AddressHeading = styled(Heading)`
  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(FormContainer)``;

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${props => props.theme["purple"]};
  }
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`

export const CartTotalCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${props => props.theme["base-card"]};
  width: 100%;
  min-width: 28rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${props => props.theme["base-button"]};
    margin: 24px 0;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`;

export const CoffeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 6px 8px;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    
    transition: all 0.2s;

    &:hover {
      background-color: ${props => props.theme["base-hover"]};
    }

    > svg {
      color: ${props => props.theme.purple};
    }

    > span {
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
      color: ${props => props.theme["base-text"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS}
    }

    span:last-child {
      ${mixins.fonts.textM}
    }

  }

  div:last-child {
    span {
      color: ${props => props.theme["base-subtitle"]};
      ${mixins.fonts.textL}
      font-weight: bold;
    }
  } 
`;

export const CheckoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  ${mixins.fonts.buttonG}
  text-transform: uppercase;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;

  transition: all 0.2s;

  &:hover{
    background-color: ${props => props.theme["yellow-dark"]};
  }

  cursor: pointer;
`;