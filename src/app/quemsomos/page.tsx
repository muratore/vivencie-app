import React from "react";
import Cabecalho from "../shared/Cabecalho";
import TitleSections from "../shared/TitleSections";
import Image from "next/image";
import Img_areaVivencie from "public/assets/local/aerea-vivencie.jpg";
import Video from "@/components/Video";
import Whatsapp from "../shared/Whatsapp";

const QuemSomos = () => {
  return (
    <div className="flex flex-col flex-1 pb-24 bg-vivencie text-white">
      <Cabecalho className=" bg-vivencie shadow-md" />
      <div className="flex flex-col items-center mt-40 px-8 md:px-16 xl:px-40 justify-center">
        <Video />

        {/* <Image className=" w-full h-[700px] object-cover"
          src={Img_areaVivencie}
          alt="Imagem Aerea da Sede da Vivencie Residencial Sênior"
        /> */}
        <div className=" flex flex-col items-center ">
          <TitleSections
            className=" lg:w-3/5 "
            title="Um Lugar onde os sorrisos se encontram e as histórias se entrelaçam!"
          />

          <div className=" flex flex-col gap-5 lg:w-3/5 lg:text-lg font-light ">
            <p>
              O Vivencie Residencial Sênior nasceu em 2023 por Raquel Rodicio,
              fisioterapeuta e fundadora da Vivencie Pilates desde 2016, no qual
              o nome VIVENCIE foi inspiração para o novo projeto.
            </p>
            <p>
              O residencial surgiu de uma necessidade para seu pai com
              Alzheimer, que residiu em uma Instituição de Longa Permanência
              para Idosos (ILPI) por 1 ano e 6 meses.
            </p>
            <p>
              Tudo começou quando Deus preparou a casa, onde Sr. Santiago
              comprou para o nascimento da sua filha Raquel, onde viveram 12
              felizes anos. A casa ficou alugada por 20 anos e após 32 anos o
              local retornou para a família.
            </p>
            <p>
              Raquel aliou então, seu espírito de empreendedora à situação do
              seu pai e percebendo a carência de mercado de residências com o
              sentimento de família, amor e aconchego, resolveu fazer o projeto
              do seu próprio residencial.
            </p>
            <p>
              Hoje a casa onde passou sua infância se transforma num espaço
              cheio de amor e cuidado para ser vivenciado por nossos hóspedes e
              residente. A história continua sendo edificada e convidamos você a
              fazer arte dela 💚
            </p>
            <p>
              Somos um lar, aonde amor, segurança e cuidado caminham sempre
              juntos proporcionando um ambiente acolhedor, de alto padrão, com
              uma equipe de profissionais especializados, que vão cuidar de cada
              hóspede como se fosse único.
            </p>
            <p>
              Nossa missão é promover o bem-estar, o respeito e a felicidade de
              cada residente, valorizando a individualidade, a autonomia e a
              conexão entre as pessoas. Queremos garantir que cada morador se
              sinta amado, protegido e apoiado em todos os momentos.
            </p>
            <p>
              <span className="font-bold">A Vivencie Residencial Sênior </span>{" "}
              conta com uma equipe de profissionais dedicados e capacitados e
              uma estrutura completa para proporcionar uma rotina animada, plena
              e significativa.
            </p>
          </div>
        </div>
      </div>
      <Whatsapp className=" fixed right-8 bottom-8"/>
    </div>
  );
};

export default QuemSomos;
