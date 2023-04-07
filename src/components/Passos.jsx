import React from "react";
import CardPassos from "./CardPassos";

const Passos = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFF4CF] px-5 py-16">
      <div className="md:w-3/6">
        <h2 className="font-bold text-3xl text-center text-[#277BC0]">
          Você está a poucos passos de economizar até 95% na sua conta de
          energia
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:my-10 md:w-5/6">
        <div>
          <CardPassos
            step="1"
            title="Geração do orçamento sem compromisso"
            desc="Proposta comercial com detalhes do investimento"
          />
        </div>
        <div>
          <CardPassos
            step="2"
            title="Vistoria técnica e assinatura do contrato"
            desc="Profissionais qualificados farão vistoria no local"
          />
        </div>
        <div>
          <CardPassos
            step="3"
            title="Projeto e instalação dos equipamentos"
            desc="Cuidamos do seu projeto do começo ao fim, com total garantia"
          />
        </div>
        <div>
          <CardPassos
            step="4"
            title="Homologação e Ativação na concessionária"
            desc="Ativamos e deixamos seu sistema pronto para uso"
          />
        </div>
      </div>
    </div>
  );
};

export default Passos;
