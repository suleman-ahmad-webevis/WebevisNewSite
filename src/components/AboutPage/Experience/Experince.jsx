import React, { useState, useEffect } from "react";
import {
  ExperienceText,
  ProgressCover,
  ProgressMain,
  ProgressWrapper,
  StyledExperience,
} from "./Experience.styles";
import { ContainerWrapper } from "src/components/Container.styles";

const Experince = () => {
  const [isInView, setIsInView] = useState(false);
  const [progressValues, setProgressValues] = useState({
    webDevelopment: 0,
    mobileDevelopment: 0,
    digitalMarketing: 0,
    customerSupport: 0,
  });

  const checkIfInView = () => {
    const element = document.querySelector(".progress-container"); // selector
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsInView(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      setProgressValues({
        webDevelopment: 95,
        mobileDevelopment: 88,
        digitalMarketing: 98,
        customerSupport: 75,
      });
    }
  }, [isInView]);
  return (
    <StyledExperience>
      <ContainerWrapper>
        <ExperienceText>
          <h2>Our Proven Professional Expertise And Unrivaled Experience</h2>
          <p>
            We pride ourselves on our years of experience, delivering impeccable
            service and solutions with the highest level of professionalism. We
            work closely with our clients, fostering open communication and a
            deep understanding of their needs.
          </p>
        </ExperienceText>
      </ContainerWrapper>
      <ProgressWrapper>
        <ContainerWrapper>
          <ProgressCover>
            <ProgressMain className="progress-container">
              {/* <ProgressBar value={95} /> */}
              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="100" cy="100" r="90"></circle>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      style={{ "--value": progressValues.webDevelopment }}
                    ></circle>
                  </svg>
                  <div class="number">
                    <h3>95%</h3>
                  </div>
                </div>
              </div>
              <p>Web Development</p>
            </ProgressMain>
            <ProgressMain className="progress-container">
              {/* <ProgressBar value={88} /> */}
              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="100" cy="100" r="90"></circle>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      style={{ "--value": progressValues.mobileDevelopment }}
                    ></circle>
                  </svg>
                  <div class="number">
                    <h3>88%</h3>
                  </div>
                </div>
              </div>
              <p>Mobile Development</p>
            </ProgressMain>
            <ProgressMain className="progress-container">
              {/* <ProgressBar value={98} /> */}
              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="100" cy="100" r="90"></circle>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      style={{ "--value": progressValues.digitalMarketing }}
                    ></circle>
                  </svg>
                  <div class="number">
                    <h3>98%</h3>
                  </div>
                </div>
              </div>
              <p>Digital Marketing </p>
            </ProgressMain>
            {/* <ProgressMain>
              <ProgressBar value={75} />
              <p>Customer Support</p>
            </ProgressMain> */}
            <ProgressMain className="progress-container">
              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="100" cy="100" r="90"></circle>
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      style={{ "--value": progressValues.customerSupport }}
                    ></circle>
                  </svg>
                  <div class="number">
                    <h3>75%</h3>
                  </div>
                </div>
              </div>
              <p>Customer Support</p>
            </ProgressMain>
          </ProgressCover>
        </ContainerWrapper>
      </ProgressWrapper>
    </StyledExperience>
  );
};

export default Experince;
