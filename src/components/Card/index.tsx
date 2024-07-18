import { useEffect, useState } from "react";
import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { CardContainer, CoffeeImg, Tags, TitleCard, DescriptionCard, FooterControlCard, PriceLabel, OrderContainer } from "./styles";
import { QuantityInput } from "../Form/QuantityInput";
import { useCart } from "../../hooks/useCart";

type Props = {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    img: string,
  }
}

export function Card({ coffee }: Props) {
  const theme = useTheme();

  const [quantityItem, setQuantityItem] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);
  const { addItem } = useCart()

  function handleIncrementQuantityItem() {
    setQuantityItem((state) => {
      return state + 1
    })
  }

  function handleDecrementQuantityItem() {
    if (quantityItem > 1) {
      setQuantityItem((state) => {
        return state - 1
      })
    }
  }

  function handleAddItem() {
    console.log('Add Item');

    console.log(coffee.id, quantityItem)

    addItem({ id: coffee.id, quantity: quantityItem})
    setItemAdded(true)
    setQuantityItem(1)
  }

  useEffect(() => {
    let timeOut: number;

    if (itemAdded) {
      timeOut = setTimeout(() => {
        setItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    }
  }, [itemAdded]);

  return (
    <CardContainer>
      <CoffeeImg src={coffee.img} />

      <Tags>
        {coffee.tags.map((tag) => {
          return (
            <span key={tag}>{tag}</span>
          )
        })}
      </Tags>

      <TitleCard>{coffee.title}</TitleCard>

      <DescriptionCard>{coffee.description}</DescriptionCard>

      <FooterControlCard>
        <PriceLabel>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </PriceLabel>

        <OrderContainer $itemAdded={itemAdded}>
          <QuantityInput
            quantity={quantityItem}
            incrementQuantityItem={handleIncrementQuantityItem}
            decrementQuantityItem={handleDecrementQuantityItem}
          />

          <button disabled={itemAdded} onClick={handleAddItem}>
            {itemAdded ? (
              <CheckFat
                size={22}
                weight="fill"
                color={theme["base-card"]}
              />
            ) : (
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme["base-card"]}
              />
            )}
          </button>
        </OrderContainer>
      </FooterControlCard>
    </CardContainer>
  )
}