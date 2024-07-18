import { Card } from "../../components/Card";
import { Banner } from "./components/Banner";
import { HomeContainer, CardContainer, CoffeeList } from "./styles";

import { coffees } from '../../service/data.json';

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <CardContainer>
          {coffees.map((coffee) => {
            return (
              <Card key={coffee.id} coffee={coffee} />
            )
          })}
        </CardContainer>
      </CoffeeList>


    </HomeContainer>
  )
}