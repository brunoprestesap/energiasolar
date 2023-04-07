import React from "react";
import { TbSolarPanel2 } from "react-icons/tb";
import CardMotivos from "./CardMotivos";

import { MdMoneyOff } from "react-icons/md";
import { WiSolarEclipse } from "react-icons/wi";
import { GiSolidLeaf } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { BiDollarCircle } from 'react-icons/bi'

const Motivos = () => {
  return (
    <div className="bg-[#FFB200] px-5 py-12">
      <div className="flex flex-col items-center">
        <TbSolarPanel2 color="FFF4CF" size={80} />

        <h2 className="font-bold text-3xl my-5 text-[#FFF4CF] text-center">
          Por que utlizar energia solar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <CardMotivos
            img={<MdMoneyOff color="FFF4CF" size={80} />}
            text="Menor custo de nossa história"
          />
          <CardMotivos
            img={<WiSolarEclipse color="FFF4CF" size={80} />}
            text="Fonte inesgotável de energia"
          />
          <CardMotivos
            img={<GiSolidLeaf color="FFF4CF" size={60} />}
            text="Total sintonia com a sustentabilidade"
          />
          <CardMotivos
            img={<FaHandHoldingUsd color="FFF4CF" size={60} />}
            text="Melhor custo benefício"
          />
          <CardMotivos
            img={<BsFillAwardFill color="FFF4CF" size={60} />}
            text="Garantia de 25 a 30 anos de performance"
          />
          <CardMotivos
            img={<BiDollarCircle color="FFF4CF" size={60} />}
            text="Retorno de investimento (ROI) de 3 a 5 anos"
          />
        </div>
      </div>
    </div>
  );
};

export default Motivos;
