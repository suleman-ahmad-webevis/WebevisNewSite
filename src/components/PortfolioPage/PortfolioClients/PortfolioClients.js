import { ClientSection } from "./PortfolioClients.styles";
import { Container } from "src/components/Container.styles";

const PortfolioClients = (props) => {
  return (
    <ClientSection>
      <Container>
        <div className="Headlines">
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
        </div>
      </Container>
    </ClientSection>
  );
};

export default PortfolioClients;
