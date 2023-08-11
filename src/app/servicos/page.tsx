import React from "react";
import Cabecalho from "../shared/Cabecalho";
import CardServicos from "@/components/CardServicos";
import jardim from "public/assets/local/jardim.jpg";
import jardim1 from "public/assets/local/jardim1.jpg";
import piscina from "public/assets/local/piscina.jpg";
import TitleSections from "../shared/TitleSections";
import Rodape from "@/components/Rodape";

const Servicos = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-vivencie">
      <Cabecalho className=" bg-vivencie shadow-md" />
      <div className="flex flex-col items-center mt-40 px-8 md:px-16 xl:px-40 justify-center">
        <TitleSections title="Um lugar aconchegante e seguro para quem você ama!" />
        <div className="flex flex-col gap-8">
          <CardServicos
            titulo="CENTRO DIA"
            imagem={jardim}
            texto="Nossas portas estão abertas para quem deseja desfrutar de todos os cuidados, serviços e infraestrutura e, no fim do dia, retornar para a própria casa. Quem optar por essa modalidade terá 
            refeições, banho e – assim como os hóspedes – as atividades coordenadas por equipe multidisciplinar. Dessa forma, o idoso se beneficia com a socialização promovida pelo residencial e com a estimulação de  habilidades."
            alt="Imagem do quintal aconchegante com uma piscina"
          />

          <CardServicos
            titulo="HOSPEDAGEM TEMPORÁRIA"
            imagem={piscina}
            texto="Quem desejar se hospedar por um tempo determinado, terá os mesmos cuidados, atenção e atividades  dos residentes permanentes, além de ter oportunidades de socialização ao conviver com outros hóspedes da mesma faixa etária."
            alt="Jardim com piscina"
            className=" gap-8 flex-row-reverse"
          />
          <CardServicos
            titulo="HOSPEDAGEM PERMANENTE"
            imagem={jardim1}
            texto="O residente passa a morar no Vivencie Residencial Sênior recebendo cuidados multiprofissionais 24h por dia, desfrutando de um ambiente aconchegante e totalmente adaptado às suas necessidades.  A rotina inclui várias atividades diárias e acompanhamento da saúde."
            alt="Jardim com amplo espaçoa para descanso"
          />
        </div>
      </div>
      <div className="bg-red-500 flex-1"></div>
      <Rodape/>
    </div>
  );
};

export default Servicos;
