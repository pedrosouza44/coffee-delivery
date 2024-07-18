import { BannerContainer, TextContainer, Title, SubTitle, ItemsContainer, ItemContent } from "./styles";

import BannerImg from '../../../../assets/Imagem.svg';
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
// import { useTheme } from "styled-components";

export function Banner() {

  // const theme = useTheme();
  return (
    <BannerContainer>
      <TextContainer>
        <Title>
          Encontre o café perfeito para qualquer hora do dia
        </Title>

        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </SubTitle>

        <ItemsContainer>
          {/* <div>
            <Timer
              size={32}
              weight="fill"
              color={theme.background}
              style={{ backgroundColor: theme.yellow }}
            />
            <label htmlFor="item1">Compra simples e segura</label>
          </div> */}


          <ItemContent itemColor="orange">
            <span>
              <ShoppingCart size={32} weight="fill" />
            </span>
            <label htmlFor="item1">Compra simples e segura</label>
          </ItemContent>

          <ItemContent itemColor="gray">
            <span><Package size={32} weight="fill" /></span>
            <label htmlFor="item1">Compra simples e segura</label>
          </ItemContent>

          <ItemContent itemColor="yellow">
            <span><Timer size={32} weight="fill" /></span>
            <label htmlFor="item1">Compra simples e segura</label>
          </ItemContent>

          <ItemContent itemColor="purple">
            <span><Coffee size={32} weight="fill" /></span>
            <label htmlFor="item1">Compra simples e segura</label>
          </ItemContent>
        </ItemsContainer>
      </TextContainer>

      <img src={BannerImg} alt="Banner-img" />
    </BannerContainer>
  )
}