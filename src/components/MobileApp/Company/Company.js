import React from "react";
import { CompanyContent, CompanyHolder } from "./Company.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";
import { useState } from "react";

const Company = () => {
  const [modal, setModal] = useState(false);
  return (
    <CompanyHolder>
      <Modal
        open={modal}
        setOpen={setModal}
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        mobileColor="black"
        child={<DateModal title="Dedicated Developers" />}
      />
      <Container>
        <CompanyContent>
          <div className="Content">
            <h2>Looking for a Mobile App Development Company?</h2>
            <p>
              Still thinking about whether to start your software project or
              need some guidance? Don{"'"}t worry! Just schedule a call with us,
              and our executives will help you define the best-fit solution to
              meet your requirements.
            </p>
          </div>
          <PrimaryButton
            width="270"
            height="60"
            size="24"
            minsize="18"
            radius="12px"
            onClick={() => setModal(true)}
          >
            Schedule a Call
          </PrimaryButton>
        </CompanyContent>
      </Container>
    </CompanyHolder>
  );
};

export default Company;
