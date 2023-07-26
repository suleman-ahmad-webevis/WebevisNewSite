import React from 'react'
import Image from "next/image";
import { ServicesContainer, ServiceCard, ServicesCards } from './ServiceStyles'
import Strategy from '../../../assets/images/Services/ContentMarkettingServices/Strategy.png'
import Development from '../../../assets/images/Services/ContentMarkettingServices/Development.png'
import Creation from '../../../assets/images/Services/ContentMarkettingServices/Creation.png'
import Optimization from '../../../assets/images/Services/ContentMarkettingServices/Optimization.png'
import Promotion from '../../../assets/images/Services/ContentMarkettingServices/Promotion.png'
import Reporting from '../../../assets/images/Services/ContentMarkettingServices/Reporting.png'

const Services = () => {
  return (
    <ServicesContainer>
      <h4>WHY CHOOSE OUR</h4>
      <h2>Content Marketing Services</h2>
      <h3>We offer some unique and extraordinary advantages as well</h3>

      <ServicesCards>
        <ServiceCard>
            <Image src={Strategy} alt='strategy' />
            <h2>Content Marketing <br />Strategies</h2>
        </ServiceCard>
        <ServiceCard>
            <Image src={Development} alt='Development' />
            <h2>Content Development</h2>
        </ServiceCard>
        <ServiceCard>
            <Image src={Creation} alt='Creation' />
            <h2>Content Creation</h2>
        </ServiceCard>
        <ServiceCard>
            <Image src={Optimization} alt='Optimization' />
            <h2>Content Optimization</h2>
        </ServiceCard>
        <ServiceCard>
            <Image src={Promotion} alt='Promotion' />
            <h2>Content Promotion</h2>
        </ServiceCard>
        <ServiceCard>
            <Image src={Reporting} alt='Reporting' />
            <h2>Content Reporting</h2>
        </ServiceCard>
      </ServicesCards>

    </ServicesContainer>
  )
}

export default Services
