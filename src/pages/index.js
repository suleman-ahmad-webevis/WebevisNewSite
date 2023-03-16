// import { Inter } from "next/font/google";

import Designation from "src/components/Designation/Designation";
import Experts from "src/components/Experts/Experts";
import Feed from "src/components/Feed/Feed";
import HomeMain from "src/components/HomeMain/HomeMain";
import Layout from "src/components/Layout";
import Trusted from "src/components/Trusted/Trusted";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({pageProps}) {
  return (
    <>
      <Layout>
       <HomeMain {...pageProps} />   
       <Trusted {...pageProps} />
       <Designation {...pageProps}  />
       <Experts {...pageProps} />
       <Feed {...pageProps} />
      </Layout>
    </>
  );
}
