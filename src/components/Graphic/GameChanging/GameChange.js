import React from "react";
import {
  Cards,
  Game,
  GameContent,
  GameHolder,
  Help,
  Quote,
} from "./GameChange.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import MediaImg from "../../../assets/images/Graphic/Media-design-img.png";
import LogoImg from "../../../assets/images/Graphic/Logo-img.png";
import EmailImg from "../../../assets/images/Graphic/Email-img.png";
import AdsImg from "../../../assets/images/Graphic/Ads-img.png";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { PrimaryButton } from "src/components/Button.styles";

const GameChange = () => {
  return (
    <GameHolder>
      <Container>
        <Game>
          <h2>Game-Changing Graphic Design Services</h2>
          <p>
            We offer professional graphic design services for all your creative
            needs.
          </p>
          <GameContent>
            <div className="Media">
              <div className="img-holder">
                <Image src={MediaImg} alt="MediaImg" />
              </div>
              <h3>Social Media Designs</h3>
            </div>
            <div className="LogoHolder">
              <div className="Logo">
                <Image src={LogoImg} alt="LogoImg" />
                <h3>
                  Logo <br /> Design
                </h3>
              </div>
              <div className="Email">
                <h3>
                  Email <br /> Template <br /> Design
                </h3>
                <Image src={EmailImg} alt="EmailImg" />
              </div>
            </div>
            <div className="Add">
              <Image src={AdsImg} alt="AdsImg" />
              <h3>
                Social Media ADS <br /> DESIGN{" "}
              </h3>
            </div>
          </GameContent>
          <Cards>
            <div className="Presentation">
              <h3>Presentation Design </h3>
            </div>
            <div className="Interface">
              <h3>
                User
                <br /> InterFace <br /> Design{" "}
              </h3>
            </div>
          </Cards>
          <Help>
            <h2>
              How Webevis <br /> Technologies <br /> Help You
            </h2>
            <div className="ColHolder">
              <div className="Col">
                <h3>Brainstorm With The Client</h3>
              </div>
              <div className="Col">
                <h3>Understand the requirement</h3>
              </div>
              <div className="Col">
                <h3>
                  Sketch <br /> & graphic Design
                </h3>
              </div>
              <div className="Col">
                <h3>
                  Feedback <br /> & <br />
                  iterations
                </h3>
              </div>
              <div className="Col">
                <h3>Approvals</h3>
              </div>
            </div>
          </Help>
          <Quote>
            <button>
              <div>
                <span>Get Started With</span>
                <br />
                Your Free Quote
              </div>
              <MdNavigateNext color="#fff" size="30" />
            </button>
            <div className="QuoteHolder">
              <div className="Quote">
                <MdOutlineStarBorder color="#D9D9D9" size="30" />
                <h3>Proper Communication</h3>
              </div>
              <div className="Quote">
                <MdOutlineStarBorder color="#D9D9D9" size="30" />

                <h3>Productive two way discussions</h3>
              </div>
              <div className="Quote">
                <MdOutlineStarBorder color="#D9D9D9" size="30" />
                <h3>ON-TIME DELIVERY</h3>
              </div>
              <div className="Quote">
                <MdOutlineStarBorder color="#D9D9D9" size="30" />
                <h3>IDEATE AND EXECUTE PROCESS</h3>
              </div>
            </div>
          </Quote>
        </Game>
      </Container>
    </GameHolder>
  );
};

export default GameChange;
