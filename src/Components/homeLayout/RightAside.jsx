import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import adImg from "../../assets/bg.png";

const RightAside = () => {
  return (
    <div className='space-y-8'>
      <SocialLogin/>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <div>
        <img src={adImg} alt="" />
      </div>
    </div>
  );
};

export default RightAside;