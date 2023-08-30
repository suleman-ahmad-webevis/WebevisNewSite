import React from 'react'
import Layout from 'src/components/Layout/Layout'
import Choose from 'src/components/WebApp/choose/Choose';
import CustomWeb from 'src/components/WebApp/customWeb/CustomWeb';
import Hero from "src/components/WebApp/heroSection/Hero";
import Talk from 'src/components/WebApp/talk/Talk';
import Assurance from 'src/components/WebApp/webAssurance/Assurance';
import WebProcess from 'src/components/WebApp/webProcess/WebProcess';


const index = () => {
  return (
    <Layout>
      <Hero/>
      <CustomWeb/>
      <Assurance/>
      <WebProcess/>
      <Talk/>
      <Choose/>
    </Layout>
  )
}

export default index
