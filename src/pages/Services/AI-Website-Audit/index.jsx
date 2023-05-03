import React from 'react'
import Layout from 'src/components/Layout/Layout'
import HeroSection from 'src/components/AWAServices/HeroSection/HeroSection'
import Trusted from 'src/components/AWAServices/Slider/Trusted'
import AiServices from 'src/components/AWAServices/AiServices/AiServices'
import AilWebsiteAudit from 'src/components/AWAServices/AiWebsiteAudit/AilWebsiteAudit'
import Boost from 'src/components/AWAServices/BoostOptions/Boost'
import BoostSteps from 'src/components/AWAServices/BoostSteps/BoostSteps'
import Explore from 'src/components/AWAServices/Explore/Explore'
import FreeWebsite from 'src/components/AWAServices/FreeWebsite/FreeWebsite'
import Client from 'src/components/AWAServices/OurClient/Client'

const index = () => {
  return (
    <Layout>
        <HeroSection />
        <Trusted />
        <AiServices />
        <AilWebsiteAudit />
        <Boost />
        <BoostSteps />
        <Explore />
        <FreeWebsite />
        <Client />
    </Layout>
  )
}

export default index
