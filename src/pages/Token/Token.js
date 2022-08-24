import React from "react";

//import Componnets
import Ecosystem from "../../components/Ecosystem/Ecosystem";
import Roadmap from "../../components/Roadmap/Roadmap";
import Faq from "../../components/Faq/Faq";
import Help from "../../components/Help/Help";

const Token = () => {
  return (
    <div className="mt-[100px]">
      <Ecosystem />
      <Roadmap />
      <Faq />
      <Help />
    </div>
  );
};

export default Token;
