import React from 'react';
import { DigitalMarketing, ImageHolder, TextHolder } from './index.styles';
import { Container } from 'src/components/Container.styles';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import img1 from "src/assets/images/Services/leftcol.png"
import { FiChevronRight } from 'react-icons/fi';


const Index = () => {
    const progressPercentage = 90;

    return (

        <Container >
            <DigitalMarketing>
                <ImageHolder><Image src={img1} alt="leftcol-benifitofDigitalMarketing" /></ImageHolder>
                <TextHolder>

                    <h1>Benefits Of Digital Marketing</h1>
                    <p>
                        Digital marketing offers a wide range of benefits for businesses and individuals alike. Here are some of the
                        key benefits of digital marketing:
                    </p>
                    <h2>Digital Marketing</h2>
                    <div className="container">
                        <ProgressBar percentage={progressPercentage} />
                        <ul>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Global Reach
                            </li>
                            <li><span className="icon-holder">
                                <FiChevronRight color="#fff" />
                            </span>
                                Targeted Audience
                            </li>
                            <li> <span className="icon-holder">
                                <FiChevronRight color="#fff" />
                            </span>
                                Cost-Effective
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Measurable Results
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Personalization
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Interactivity
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Flexibility
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Higher Conversion Rates
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Better ROI
                            </li>
                            <li>
                                <span className="icon-holder">
                                    <FiChevronRight color="#fff" />
                                </span>
                                Competitive Edge
                            </li>

                        </ul>

                    </div>
                </TextHolder>
            </DigitalMarketing>

        </Container>

    );
};

export default Index;
