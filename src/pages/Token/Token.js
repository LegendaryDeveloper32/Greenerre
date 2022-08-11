import React from "react";

//import Componnets
import GreenDAOla from "../../components/GreenDAOla/GreenDAOla";
import AOC from "../../components/AOC/AOC";
import Faq from "../../components/Faq/Faq";
import Help from "../../components/Help/Help";

const Token = () => {
  return (
    <div className="mt-[100px]">
      <GreenDAOla />
      <AOC />
      <Faq />
      <Help />
    </div>
  );
};

export default Token;
