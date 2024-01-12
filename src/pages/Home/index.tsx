import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import imgCoffeeHome from "../../assets/img-coffee-home.svg"
import { Slide, SlideBenefits, SlideText } from "./styles";
import { Catalog } from "./Components/Catalog";

export function Home() {
  return (
    <>   
    <Slide>
      <div>
        <SlideText>
          <h1>Encontre o café perfeito <br/> para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver,<br/>
            a qualquer hora
          </p>
        </SlideText>

        <SlideBenefits>
          <div>
            <span>
              <ShoppingCart size={16}  weight="fill"/>
            </span>
            <p>Compra simples e segura</p>
          </div>

          <div>
            <span>
              <Package size={16}  weight="fill"/>
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>

          <div>
            <span>
              <Timer size={16} weight="fill"/>
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>

          <div>
            <span>
              <Coffee size={16}  weight="fill"/>
            </span>  
            <p>O café chega fresquinho até você</p>
          </div>
        </SlideBenefits>
      </div>

      <div>
        <img src={imgCoffeeHome} alt="" />
      </div>

    </Slide>
    <Catalog/>
    </>
  )
}