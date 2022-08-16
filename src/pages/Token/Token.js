import React from "react";

//import Componnets
import Ecosystem from "../../components/Ecosystem/Ecosystem";
import GreenDAOla from "../../components/GreenDAOla/GreenDAOla";
import AOC from "../../components/AOC/AOC";
import VPets from "../../components/Vpets/Vpets";
import Faq from "../../components/Faq/Faq";
import Help from "../../components/Help/Help";

const Token = () => {
  return (
    <div className="mt-[100px]">
      <Ecosystem />
      <GreenDAOla />
      <AOC />
      <VPets />
      <Faq />
      <Help />
    </div>
  );
};

export default Token;
