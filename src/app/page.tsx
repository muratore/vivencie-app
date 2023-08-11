import Image from "next/image";
import Cabecalho from "./shared/Cabecalho";
import Abertura from "public/assets/vivencie_abertura.jpg";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    
      <main className=" flex flex-col h-full min-h-screen bg-green-500">
        <Cabecalho className="" />
        <div className="">
          <Image
            className="flex h-full object-cover absolute top-0 z-0 "
            src={Abertura}
            alt="Casal de idosos abraçados de forma muito calorosa"
          />
          <h1 className=" text-5xl md:text-8xl px-10 text-center text-white font-italic
          absolute bottom-36 left-0 right-0
          
          ">Um presente para o futuro</h1>
           <Rodape className=" z-40 absolute w-full bottom-0" />
        </div>
       
      </main>
    
  );
}
