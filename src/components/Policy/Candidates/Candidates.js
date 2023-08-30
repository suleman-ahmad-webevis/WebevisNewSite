import React from "react";
import { Candidate, CandidateHolder } from "./Candidates.styles";
import { Container } from "src/components/Container.styles";
import Link from "next/link";

const Candidates = () => {
  return (
    <CandidateHolder>
      <Container>
        <Candidate>
          <div>
            <h2>Personal Information About Candidates</h2>
            <p>
              Please note that we collect information about candidates when they
              submit a job application to our Site, either by using the Contact
              Form or through information email, which is{" "}
              <Link href="mailto:info@webevis.com">info@webevis.com</Link>. For
              instance, we may collect an applicant’s first name and surname,
              phone number, place of residence (city and country), email
              address, and other necessary information which they may provide to
              us in the form of, but not limited to, cover letter, resume or
              curriculum vitae (CV).
            </p>
          </div>
          <div>
            <h2>Usage of Information</h2>
            <p className="info">
              InvoZone uses the information that it collects for many different
              purposes, including but not limited to:s
            </p>
            <ul>
              <li>
                Contact our clients, or prospects, and reply to information
                requests about InvoZone;
              </li>
              <li>
                Process and analyse job applications that we receive from
                potential employees;
              </li>
              <li>
                Contact our clients, or prospects, and reply to information
                requests about InvoZone;
              </li>
              <li>
                Process and analyse job applications that we receive from
                potential employees;
              </li>
              <li>
                Process and analyse job applications that we receive from
                potential employees;
              </li>
            </ul>
            <p>
              We might combine the information that we collect on our Site,
              along with additional information that the third-parties shall
              collect to form an aggregate which shall limit your detectability.
              We may use this combined information for purposes that include
              research, improving the Site, data analysis and/or developing new
              features.Let’s also discuss how we use Cookies.
            </p>
          </div>
        </Candidate>
      </Container>
    </CandidateHolder>
  );
};

export default Candidates;
