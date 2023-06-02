import React from 'react'
import Layout from 'src/components/Layout/Layout'
import HeroSection from 'src/components/youtubeMarketting/heroSection/heroSection'
import YoutubeMarket from 'src/components/youtubeMarketting/youtubeMarketing/YoutubeMarket'

const index = () => {
  return (
    <Layout>
        <HeroSection />
        <YoutubeMarket/>
    </Layout>
  )
}

export default index
