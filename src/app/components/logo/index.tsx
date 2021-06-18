import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center    
    `};
`;

const LogoText = styled.div`
  ${tw`
    text-lg
    md:text-xl
    text-black
    `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-10 md:h-14`};

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="" />
      </Image>
      <LogoText>E~Car</LogoText>
    </LogoContainer>
  );
}
