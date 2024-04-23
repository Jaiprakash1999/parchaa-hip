import React from "react";
import digitalMission from "../../../../images/digital-mission.svg";
import parchaaABDM from "../../../../images/abdm-parchaa.svg";
import nationalHealthAuthority from "../../../../images/national-health-authority.svg";
import rightArrow from "../../../../images/arrow-right.svg";

const Home = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-center">
        <img src={digitalMission} alt="digitalMission" />
        <img src={parchaaABDM} alt="parchaaABDM" />
      </div>
      <div className="text-4xl my-4 font-medium text-[#111928]">
        Parchaa is now ABDM compliant
      </div>
      <div className="text-[#6B7280] my-4 text-base font-normal">
        Experience flawless healthcare possibilities with Parchaa and
        <div className="text-[#6B7280] text-base font-normal">
          Ayushman Bharat Digital Mission (ABDM) seamlessly integrated.
        </div>
      </div>
      <div className="flex my-4 justify-center item-center">
        <div className="text-lg me-8 font-medium text-[#6B7280]">
          APPROVED BY
        </div>
        <img src={nationalHealthAuthority} alt="nationalHealthAuthority" />
      </div>
      <div className="sm:flex sm:my-24 my-8 items-center">
        <h1 className="text-lg font-normal text-[#6B7280]">
          Your Data. Your Privacy. You are in Control.
        </h1>
        <button className="flex ms-1 items-center gap-2 text-[#1C64F2]">
          View More <img src={rightArrow} alt="rightArrow" />
        </button>
      </div>
    </div>
  );
};

export default Home;
