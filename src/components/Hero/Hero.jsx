import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <HeroImage
        alt="Picture of a cat"
        src="/images/hero-img.jpg"
        srcSet="
          /images/hero-img.avif 1x,
          /images/hero-img.jpg 1x,
          /images/hero-img@2x.avif 2x,
          /images/hero-img@2x.jpg 2x,
          /images/hero-img@3x.avif 3x,
          /images/hero-img@3x.jpg 3x,
        "
      />
      <Swoop alt="Swoop design" src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
