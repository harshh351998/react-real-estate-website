import React from 'react';
import { Button } from './Button';
import './Team.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';

import { Link } from 'react-router-dom';

function Team() {
  return (
   
      <div className='team__section'>
        <div className='team__wrapper'>
          <h1 className='team__heading'>Meet our team</h1>
          <div className='team__container'>
            <div  className='team__container-card'>
              <div className='team__container-cardInfo'>
              <img src="images/e1.jpg" alt="Person"></img>
                <h3>Jennifer Dsuza</h3>
                <i>Web Designer</i>
              </div>
            </div>
            <div className='team__container-card'>
              <div className='team__container-cardInfo'>
              <img src="images/e2.jpg" alt="Person"></img>
                <h3>Tom Holland</h3>
                <i>Senior Developer</i>

              </div>
            </div>
            <div className='team__container-card'>
              <div className='team__container-cardInfo'>
              <img src="images/e3.jpg" alt="Person"></img>
                <h3>Lily Staurt</h3>
                <i>Team Lead</i>

              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default Team;
