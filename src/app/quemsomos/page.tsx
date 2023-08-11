import React from "react";
import Cabecalho from "../shared/Cabecalho";
import TitleSections from "../shared/TitleSections";
import Image from "next/image";
import Img_areaVivencie from "public/assets/local/aerea-vivencie.jpg";
import Video from "@/components/Video";


const QuemSomos = () => {
  return (
    <div className="flex flex-col flex-1 pb-24 bg-vivencie text-white">
      <Cabecalho className=" bg-vivencie shadow-md" />
      <div className="flex flex-col items-center mt-40 px-8 md:px-16 xl:px-40 justify-center">
       

        <Video/>

        {/* <Image className=" w-full h-[700px] object-cover"
          src={Img_areaVivencie}
          alt="Imagem Aerea da Sede da Vivencie Residencial Sênior"
        /> */}
        <div className=" lg:flex items-center md:gap-8">
         <TitleSections className="py-0 lg:w-1/3 lg:text-right lg:border-r lg:pr-10" title="Um Lugar onde os sorrisos se encontram e as histórias de entrelaçam!" />

        <div className=" flex flex-col gap-5 lg:px-6 mt-10 lg:w-3/5 lg:text-lg font-light ">
          <p>
            Somos um lar, aonde amor, segurança e cuidado caminham sempre juntos
            proporcionando um ambiente acolhedor, de alto padrão, com uma equipe
            de profissionais especializados, que vão cuidar de cada hóspede como
            se fosse único.
          </p>
          <p>
            Nossa missão é promover o bem-estar, o respeito e a felicidade de
            cada residente, valorizando a individualidade, a autonomia e a
            conexão entre as pessoas. Queremos garantir que cada morador se
            sinta amado, protegido e apoiado em todos os momentos.
          </p>
          <p>
            <span className="font-bold">A Vivencie Residencial Sênior </span>{" "}
            conta com uma equipe de profissionais dedicados e capacitados e uma
            estrutura completa para proporcionar uma rotina animada, plena e
            significativa.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
