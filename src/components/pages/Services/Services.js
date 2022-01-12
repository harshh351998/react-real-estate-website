import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree} from './Data';
import Team from '../../Team';

function Services() {
  return (
    <>
      <Team />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
