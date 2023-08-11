import React from "react";
import Cabecalho from "../shared/Cabecalho";
import TitleSections from "../shared/TitleSections";
import Maps from "@/components/Maps";
import {
  IconBrandGoogleMaps,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import ContatoCard from "@/components/ContatoCard";
import Rodape from "@/components/Rodape";

const Contato = () => {
  return (
    
    <div className="flex flex-1 flex-col h-full min-h-screen bg-vivencie">
      <Cabecalho className=" bg-vivencie shadow-md" />
      <div className="flex flex-col text-white items-center mt-40 px-8 md:px-16 xl:px-40 justify-center">
       
        <div className=" grid grid-cols-1 gap-6 mt-12 lg:flex ">
      
          <ContatoCard icone={<IconPhone size={50} stroke={1}/>} titulo="Ligue pra gente" textoLink="085 2010.0825" url="tel:08520100825" />

          <ContatoCard icone={<IconBrandWhatsapp size={50} stroke={1}/>} titulo="Fale com a gente agora" textoLink="085 99841.1838" url="https://wa.me/85998411838?text=Bem-vindo%20ao%20Vivencie%20Residencial%20S%C3%AAnior!%20Como%20podemos%20lhe%20ajudar%3F"/>

          <ContatoCard icone={<IconMail size={50} stroke={1}/>} titulo="Mande um e-mail" textoLink="vivencieresidencialsenior@gmail.com" url="mailto:vivencieresidencialsenior@gmail.com" />
         
        </div>
        <h3 className=" text-4xl mt-12 mb-6">Visite-nos</h3>
        <Maps full />
      </div>
     
      <div className="flex-1"></div>
      <Rodape/>
    </div>

   
  );
};

export default Contato;
