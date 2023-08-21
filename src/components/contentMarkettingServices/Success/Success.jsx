import React from 'react'
import Image from "next/image";
import { SuccessCards, SuccessContainer, Card, Cards } from './SuccessStyles'
import SuccessSearch from '../../../assets/images/Services/ContentMarkettingServices/SuccessSearch.png'
import SuccessTraffic from '../../../assets/images/Services/ContentMarkettingServices/SuccessTraffic.png'
import SuccessHighTraffic from '../../../assets/images/Services/ContentMarkettingServices/SuccessHighTraffic.png'
import SuccessBrand from '../../../assets/images/Services/ContentMarkettingServices/SuccessBrand.png'
import SuccessLead from '../../../assets/images/Services/ContentMarkettingServices/SuccessLead.png'
import SuccessSale from '../../../assets/images/Services/ContentMarkettingServices/SuccessSale.png'
import { Container } from "src/components/Container.styles";
const Success = () => {
  return (
    <Container>
      <SuccessContainer>
        <h2>What Would Your Success Look Like With Us?</h2>
        <SuccessCards>
          <Cards>
            <Image src={SuccessSearch} alt="SuccessSearch" />
            <Card>
              <h2>
                Better <br />
                Search <br /> Rankings
              </h2>
            </Card>
          </Cards>
          <Cards>
            <Image src={SuccessTraffic} alt="SuccessTraffic" />
            <Card>
              <h2>
                Increased <br />
                Website <br /> Traffic
              </h2>
            </Card>
          </Cards>
          <Cards>
            <Image src={SuccessHighTraffic} alt="SuccessHighTraffic" />
            <Card>
              <h2>
                High <br />
                Organic <br /> Traffic
              </h2>
            </Card>
          </Cards>
          <Cards>
            <Image src={SuccessBrand} alt="SuccessBrand" />
            <Card>
              <h2>
                Increased <br />
                Brand <br /> Awareness
              </h2>
            </Card>
          </Cards>
          <Cards>
            <Image src={SuccessLead} alt="SuccessLead" />
            <Card>
              <h2>
                More <br />
                Leads{" "}
              </h2>
            </Card>
          </Cards>
          <Cards>
            <Image src={SuccessSale} alt="SuccessSale" />
            <Card>
              <h2>
                Boost <br />
                in <br /> Sales
              </h2>
            </Card>
          </Cards>
        </SuccessCards>
      </SuccessContainer>
    </Container>
  );
};

export default Success
