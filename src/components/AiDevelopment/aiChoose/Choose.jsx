import React from "react";
import { ChooseSec } from "./Choose.style";
import line from "../../../../public/assets/images/AiDevelopment/line.png";
import Image from "next/image";

const Choose = () => {
  return (
    <ChooseSec>
      <h2>Why Choose Webevis </h2>
      <div className="line">
        <div className="center_image">
          <Image src={line} alt="line" />
          <div className="circle1">
            <h5>1</h5>
          </div>
          <div className="circle2">
            <h5>2</h5>
          </div>
          <div className="circle3">
            <h5>3</h5>
          </div>
          <div className="circle4">
            <h5>4</h5>
          </div>
          <div className="circle5">
            <h5>5</h5>
          </div>
          <div className="texting step1">
            <h3>Expert AI Professionals</h3>
            <p>
              Webevis boasts a team of skilled professionals with expertise in
              advanced AI technologies such as machine learning, natural
              language processing, and computer vision.{" "}
            </p>
          </div>
          <div className="texting step2">
            <h3>Extensive Experience in AI</h3>
            <p>
              With a wealth of experience in AI development, Webevis is your
              trusted technology partner. Our track record showcases a diverse
              array of successfully built AI solutions underpinned by a profound
              knowledge of AI technologies.
            </p>
          </div>
          <div className="texting step3">
            <h3>We Prioritize Security</h3>
            <p>
              As we build and implement your AI projects, we prioritize security
              at every step. Our team meticulously follows industry-leading
              practices to ensure your data, algorithms, and AI systems are
              fortified against potential threats,
            </p>
          </div>
          <div className="texting step4">
            <h3>End-to-end AI Development</h3>
            <p>
              We begin with an in-depth consultation to understand your goals
              and requirements, develop an AI solution and tailor it to your
              specific needs, and then rigorously test and refine it until
              perfection.
            </p>
          </div>
          <div className="texting step5">
            <h3>We Prioritize Security</h3>
            <p>
              As we build and implement your AI projects, we prioritize security
              at every step. Our team meticulously follows industry-leading
              practices to ensure your data, algorithms, and AI systems are
              fortified against potential threats,
            </p>
          </div>
        </div>
      </div>
    </ChooseSec>
  );
};

export default Choose;
