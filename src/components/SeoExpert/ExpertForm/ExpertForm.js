import React from "react";
import { Container } from "src/components/Container.styles";
import { Expert, ExpertHolder } from "./ExpertForm.styles";
const seoData = [
  {
    id: 1,
    title: "Certified SEO Experts",
    discription:
      "Our local SEO specialists establish their credibility through industry-leading certifications and regular upskilling.",
  },
  {
    id: 2,
    title: "Analytics Driven",
    discription:
      "No gut feelings or assumptions. Any SEO  strategy development is carried out with a massive data analytics approach.",
  },
  {
    id: 3,
    title: "Rich Experience",
    discription:
      "Thorough knowledge comes from delivering results again and again over time. This leads to a rich experience for our professionals making them dependable.",
  },
  {
    id: 4,
    title: "White Hat SEO",
    discription:
      "We pride ourselves in only using ethical white hat SEO techniques and strategies. ",
  },
  {
    id: 5,
    title: "Custom Plans",
    discription:
      "Our resources are experts in professional planning and auditing to create an SEO strategy for you that is both customizable and flexible.",
  },
  {
    id: 6,
    title: "Scalable Process",
    discription:
      "When you hire dedicated SEO experts, they guarantee inbuilt scalability for the SEO strategy and all the processes involved in it.",
  },
];
const ExpertForm = () => {
  return (
    <ExpertHolder>
      <Container>
        <Expert>
          <div className="Seo">
            <h2>Why Hire SEO Experts From Us</h2>
            <p>
              Our professional SEO experts work with passion, learn and keep
              updating themselves of the latest trends in the industry. They are
              motivated by the results. They thrive on their technical
              knowledge. They deliver results without any black hat or grey hat
              techniques.
            </p>
          </div>
          <div className="Grid">
            {seoData.map((item, index) => (
              <div className="Col" key={index}>
                <h3>{item.title}</h3>
                <p>{item.discription}</p>
              </div>
            ))}
          </div>
        </Expert>
      </Container>
    </ExpertHolder>
  );
};

export default ExpertForm;
