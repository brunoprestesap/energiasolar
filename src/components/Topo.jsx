import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdSolarPower } from "react-icons/md";
import { GiMoneyStack, GiSolarPower } from "react-icons/gi";
import CtaForm from "./CtaForm";

const Topo = () => {
  return (
    <div className="bg-[#277BC0] p-3 sm:p-5 h-screen flex flex-col items-center justify-center">
      <FcMoneyTransfer size={70} />
      <h1 className="font-bold text-2xl sm:text-4xl text-center text-[#FFCB42]">
        Economize até 95% na sua conta de energia
      </h1>
      <div className="sm:my-3">
        <h2 className="text-center sm:text-xl font-semibold text-[#FFF4CF]">
          Entregamos o projeto completo, instalado e homologado
        </h2>
        <h2 className="text-center sm:text-xl font-semibold text-[#FFF4CF]">
          Faça um orçamento 100% online sem compromisso
        </h2>
      </div>

      <div className="w-full">
        <div className="flex justify-center gap-5 m-5">
          <MdSolarPower size="70" color="FFF4CF" />
          <GiMoneyStack size="70" color="FFF4CF" />
          <GiSolarPower size="70" color="FFF4CF" />
        </div>

        <CtaForm />
      </div>
    </div>
  );
};

export default Topo;
