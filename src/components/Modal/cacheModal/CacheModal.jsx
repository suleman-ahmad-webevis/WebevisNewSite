import React from "react";
import { ContentHolders, StyledCacheModal } from "./CacheModal.styles";
import Link from "next/link";
import { PrimaryButton } from "src/components/Button.styles";
import { RxCross2 } from "react-icons/rx";

const CacheModal = ({ toggle, setToggle }) => {
  return (
    <StyledCacheModal toast={toggle}>
      <ContentHolders>
        <div className="text">
          <p>
            This website stores cookies on your computer. These cookies are used
            to improve your website experience and provide more personalized
            services to you, both on this website and through other media. To
            find out more about the cookies we use, see our{" "}
            <Link href="privacy-policy">privacy policy.</Link>
          </p>
        </div>
        <PrimaryButton size="12" radius="8px" padding="10" weight="400">
          sure, you can use it
        </PrimaryButton>
        <div className="cross" onClick={() => setToggle(false)}>
          <RxCross2 color="rgb(28, 204, 151)" />
        </div>
      </ContentHolders>
    </StyledCacheModal>
  );
};

export default CacheModal;
