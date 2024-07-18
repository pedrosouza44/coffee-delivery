import { Minus, Plus } from "@phosphor-icons/react";
import { InputContainer } from './styles';

interface InputProps {
  quantity: number;
  incrementQuantityItem: () => void;
  decrementQuantityItem: () => void;
}

export function QuantityInput({
  quantity,
  incrementQuantityItem,
  decrementQuantityItem
}: InputProps) {
  return (
    <InputContainer>
      <button onClick={decrementQuantityItem} disabled={quantity <= 1}>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button onClick={incrementQuantityItem}>
        <Plus size={14} />
      </button>
    </InputContainer>

  )
}