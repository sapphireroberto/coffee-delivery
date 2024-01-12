import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { Cart, HeaderContainer, Locator } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt='' />
      </span>
      <nav>
        <Locator>
          <MapPin size={22} weight='fill' />
          <NavLink to="" title=''>
            Porto Alegre, RS
          </NavLink>
        </Locator>
        
        <Cart>
          <span>3</span>
          <NavLink to="/checkout" title='Carrinho'>
            <ShoppingCart size={22} weight='fill'/>
          </NavLink>
        </Cart>
        
      </nav>
    </HeaderContainer>
  )
}