import React from "react";
import CardCreativity from "../../CardCreativity";
import { HeaderSection, ContentHolder, ContainerWrapper } from "./MaketingService.styles";
import ServicesCards from "../../ServicesCards";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "src/components/Button.styles";
import { Marketingdata, ServiceCardData, MarketingProcessdata } from "../../ServicesCards/ServiceaCardsData";
import Makeusdifferent from "../../Makeusdifferent/index";
import MarketingProcess from "../../MarketingProcess/index";
import { Container } from "src/components/Container.styles";
const MarketingServices = () => {

    return (
        <Container>
            <ContainerWrapper>
                <HeaderSection>
                    <h1>Our Digital marketing
                        Services
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit
                        sagitis leo sit.
                    </p>
                </HeaderSection>
                <ContentHolder>
                    <div className="left-col">
                        <ServicesCards servicesData={ServiceCardData} btndetails={<>
                            <Button radius="11px" color="#28B781" margin-bottom="20px">
                                View More Details
                                <AiOutlineArrowRight />
                            </Button>

                        </>} />
                    </div>
                    <div className="right-col">
                        <CardCreativity />
                    </div>
                </ContentHolder>

            </ContainerWrapper>
            <Makeusdifferent marketingData={Marketingdata} />
            <MarketingProcess processData={MarketingProcessdata} />
        </Container>
    );
};
export default MarketingServices;
