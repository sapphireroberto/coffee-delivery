import CafeExpressoTradicional from "../../../../assets/catalog/expresso_tradicional.png"
import CafeExpressoAmericano from "../../../../assets/catalog/expresso_americano.png"
import CafeExpressoCremoso from "../../../../assets/catalog/expresso_cremoso.png"
import CafeExpressoGelado from "../../../../assets/catalog/expresso_gelado.png"
import CafeLeite from "../../../../assets/catalog/cafe_leite.png"
import CafeLatte from "../../../../assets/catalog/latte.png"
import CafeCapuccino from "../../../../assets/catalog/capuccino.png"
import CafeMacchiato from "../../../../assets/catalog/macchiato.png"
import CafeMocaccino from "../../../../assets/catalog/mocaccino.png"
import CafeChocolateQuente from "../../../../assets/catalog/chocolate-quente.png"
import CafeCubano from "../../../../assets/catalog/cubano.png"
import CafeHavaiano from "../../../../assets/catalog/havaiano.png"
import CafeArabe from "../../../../assets/catalog/arabe.png"
import Cafeirlandes from "../../../../assets/catalog/irlandes.png"
import { ShoppingCartSimple } from "@phosphor-icons/react"
import { Content, ProductCatalog } from "./styles"

export function Catalog() {
  return(
    <Content>
      <div>

        <header>
          <h1>Nossos cafés</h1>
        </header>

        <ProductCatalog>
          <div>
            <img src={CafeExpressoTradicional} alt="Imagem Café Expresso Tradicional" />
            <div>
              <span>Tradicional</span>
            </div>
            <h1>Expresso Tradicional</h1>
            <div>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeExpressoAmericano} alt="Imagem Café Expresso Americano" />
            <div>
              <span>Tradicional</span>
            </div>
            <h1>Expresso Americano</h1>
            <div>
              <p>Expresso diluído, menos intenso que o tradicional</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeExpressoCremoso} alt="Imagem Café Expresso Cremoso" />
            <div>
              <span>Tradicional</span>
            </div>
            <h1>Expresso Cremoso</h1>
            <div>
              <p>Café expresso tradicional com espuma cremosa</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeExpressoGelado} alt="Imagem Café Expresso Gelado" />
            <div>
              <span>Tradicional</span>
              <span>Gelado</span>
            </div>
            <h1>Expresso Gelado</h1>
            <div>
              <p>Bebida preparada com café expresso e cubos de gelo</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeLeite} alt="Imagem Café com Leite" />
            <div>
              <span>Tradicional</span>
              <span>com leite</span>
            </div>
            <h1>Café com Leite</h1>
            <div>
              <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeLatte} alt="Imagem Café Latte" />
            <div>
              <span>Tradicional</span>
              <span>com leite</span>
            </div>
            <h1>Latte</h1>
            <div>
              <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeCapuccino} alt="Imagem Café Capuccino" />
            <div>
              <span>Tradicional</span>
              <span>com leite</span>
            </div>
            <h1>Capuccino</h1>
            <div>
              <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeMacchiato} alt="Imagem Café Macchiato" />
            <div>
              <span>Tradicional</span>
              <span>com leite</span>
            </div>
            <h1>Macchiato</h1>
            <div>
              <p>Café expresso misturado com um pouco de leite quente e espuma</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeMocaccino} alt="Imagem Café Mocaccino" />
            <div>
              <span>Tradicional</span>
              <span>com leite</span>
            </div>
            <h1>Mocaccino</h1>
            <div>
              <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeChocolateQuente} alt="Imagem Chocolate Quente" />
            <div>
              <span>Especial</span>
              <span>com leite</span>
            </div>
            <h1>Chocolate Quente</h1>
            <div>
              <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeCubano} alt="Imagem Café Cubano" />
            <div>
              <span>Especial</span>
              <span>Alcoólico</span>
              <span>Gelado</span>
            </div>
            <h1>Cubano</h1>
            <div>
              <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeHavaiano} alt="Imagem Café Havaiano" />
            <div>
              <span>Especial</span>
            </div>
            <h1>Havaiano</h1>
            <div>
              <p>Bebida adocicada preparada com café e leite de coco</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={CafeArabe} alt="Imagem Café Árabe" />
            <div>
              <span>Especial</span>
            </div>
            <h1>Árabe</h1>
            <div>
              <p>Bebida preparada com grãos de café árabe e especiarias</p>
            </div>
            <div>
              <p><span>R$</span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>

          <div>
            <img src={Cafeirlandes} alt="Imagem Café Irlandês" />
            <div>
              <span>Especial</span>
              <span>Alcoólico</span>
            </div>
            <h1>Irlandês</h1>
            <div>
              <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
            </div>
            <div>
              <p><span>R$ </span>9,90</p>
              <input type="number" />
              <i>
                <ShoppingCartSimple size={22} weight="fill"/>
              </i>
            </div>
          </div>
        </ProductCatalog>

      </div>

    </Content>
  )
}