import React from "react";
import bg from "../../src/assets/images/bg.jpg";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Link from "next/link";
import Layout from "src/components/Layout/Layout";
const Error = () => {
  return (
    <Layout>
      <Container>
        <div className="error-page">
          <Image src={bg} alt="bg" />
          <Link href="/">
            <SecondaryButton
              bgText="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
              bg="#fff"
              radius="7px"
              shadow="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
              shadowH="0px 0px 11px 0px rgba(0, 0, 0, 0.17)"
              width="280"
              minWidth="210"
              height="50"
              minheight="40"
              size="22"
              minsize="16"
              hover=""
            >
              <label>Go to Home</label>
            </SecondaryButton>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default Error;
