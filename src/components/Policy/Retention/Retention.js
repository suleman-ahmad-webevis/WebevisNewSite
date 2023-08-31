import React from "react";
import { Content, RetentionHolder } from "./Retentio.style";
import { Container } from "src/components/Container.styles";

const Retention = () => {
  return (
    <RetentionHolder>
      <Container>
        <Content>
          <div>
            <h2>Data Access and Its Retention</h2>
            <p className="info">
              InvoZone may disclose or use your personal information to third
              parties when we believe, in our sole discretion, that doing so is
              necessary:
            </p>
            <ul>
              <li>
                To establish, protect, or exercise our legal rights or defend
                against legal claims;
              </li>
              <li>
                To investigate, prevent, or take action regarding illegal
                activities, suspected fraud, violations of our terms and
                conditions, or situations involving threats to our property or
                the property or physical safety of any person or a third party;
              </li>

              <li>
                To facilitate a merger, acquisition, or sale of all or a portion
                of InvoZone’s assets. You will be notified via email or a
                prominent notice on our website for any change in ownership, use
                of your personal information, and choices you may have regarding
                your personal information;
              </li>
              <li>
                To comply with applicable laws or court order, subpoena, request
                from government or law enforcement, or other legal processes.
              </li>
            </ul>
          </div>
          <div>
            <h2>Data Access and Its Retention</h2>
            <p>
              InvoZone will retain information for as long as necessary to
              accomplish the processes and purposes described in this Privacy
              Policy. InvoZone would also like to use and retain information as
              necessary to comply with our legal obligations, enforce
              agreements, and resolve disputes. However, rest assured because we
              shall only process that personal information which is relevant to
              our purpose for which it was collected in the first place. To the
              extent necessary for those purposes, we will take reasonable steps
              to ensure that personal information is accurate, complete, current
              and reliable for its intended use.
            </p>
          </div>
          <div>
            <h2>Children’s Privacy</h2>
            <p>
              The Site is not directed to, and we do not intend to, or
              knowingly, collect or solicit personal information from children
              under the age of 18. If you are under the age of 18, please do not
              use the Site or otherwise provide us with any personal information
              either directly or by other means. If a child under the age of 18
              has provided personal information to us, we encourage the child’s
              parent or guardian to contact us to request that we remove the
              personal information from our systems.
            </p>
          </div>
          <div>
            <h2>Changes to the Cookie Policy</h2>
            <p>
              We may make changes to our Privacy and Policy from time to time to
              reflect our changes to the methods of handling information that
              you provide. Please visit this page regularly, or whenever you
              visit the Website. We will also inform you through our Website
              through a notification bar or alert. Your continued visit to our
              Site and our Website thereafter constitutes acceptance of the
              changes.
            </p>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>
              Hopefully, we have clarified to you our Privacy Policy and, as was
              previously mentioned, if there is something that you are not sure
              whether you need cookies or not it is usually safer to leave them
              enabled in case it does interact with one of the features you use
              on our Site.If you are still looking for more information or would
              like to comment on or ask questions, then you can contact us
              through email on info@invozone.com.
            </p>
          </div>
        </Content>
      </Container>
    </RetentionHolder>
  );
};

export default Retention;
