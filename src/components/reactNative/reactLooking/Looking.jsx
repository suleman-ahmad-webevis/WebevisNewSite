import React from "react";
import { LookSec } from "./Looking.style";
import ios from "../../../../public/assets/images/ReactNative/ios.png";
import android from "../../../../public/assets/images/ReactNative/android.png";
import flutter from "../../../../public/assets/images/ReactNative/flutter.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Looking = () => {
  return (
    <Container>
      <LookSec>
        <div className="look_text">
          <h2>Looking for Other Services?</h2>
          <p>
            Explore our other related services to enhance the performance of
            your digital product.
          </p>
          <div className="looking_card">
            <div className="card">
              <div className="text">
                <h3>Andriod App Development</h3>
              </div>
              <div className="image">
                <Image src={android} alt="android" />
              </div>
            </div>
            <div className="card">
              <div className="text">
                <h3>IOS App Development</h3>
              </div>
              <div className="image">
                <Image src={ios} alt="ios" />
              </div>
            </div>{" "}
            <div className="card">
              <div className="text">
                <h3>Flutter App Development</h3>
              </div>
              <div className="image">
                <Image src={flutter} alt="flutter" />
              </div>
            </div>
          </div>
        </div>
      </LookSec>
    </Container>
  );
};

export default Looking;
