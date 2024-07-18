import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Link to={`/`}>
        <img src={'/images/Logo.svg'} alt="logo" />
      </Link>

      <div>
        <span>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </span>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </div>
    </HeaderContainer>
  )
}