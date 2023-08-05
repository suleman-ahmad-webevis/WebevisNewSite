import React from "react";
import { ModalHolder } from "./DeveloperModal.styles";
import Image from "next/image";
import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
import { PrimaryButton } from "src/components/Button.styles";

const DeveloperModal = () => {
  return (
    <ModalHolder>
      <div className="img-holder">
        <Image src={Developers} alt="Developers" />
      </div>
      <form>
        <h2>Hire remote Developer in 24 hours</h2>
        <div className="form">
          <div className="input-holder">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-holder">
            <label>Email</label>
            <input type="text" placeholder="Ahmed@gmail.com" />
          </div>
          <div className="input-holder">
            <label>Phone No</label>
            <input type="tel" placeholder="+985526464654" />
          </div>
          <div className="input-holder">
            <label>Company</label>
            <input type="text" placeholder="Webevis Technologies" />
          </div>
          <div className="input-holder">
            <label>Website URL</label>
            <input type="text" placeholder="ww.webevis.com" />
          </div>
          <div className="input-holder">
            <label>Experts</label>
            <input type="text" placeholder="React .Net Php" />
          </div>
        </div>
        <div className="textarea">
          <label>Description</label>
          <textarea type="text" rows={"5"} placeholder="Description" />
        </div>
        <PrimaryButton height="50" size="23">
          Schedule call
        </PrimaryButton>
      </form>
    </ModalHolder>
  );
};

export default DeveloperModal;
