export interface WhatsappProps {
  className?: string;
}
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

const Whatsapp = (props:WhatsappProps) => {
  return (
    
      <Link  className={`
    ${props.className ?? ""}
     w-12 h-12
     lg:w-16 lg:h-16 bg-white rounded-full
     flex justify-center items-center
     z-50
     drop-shadow-md
    `}
        href={
          "https://wa.me/85998411838?text=Bem-vindo%20ao%20Vivencie%20Residencial%20S%C3%AAnior!%20Como%20podemos%20lhe%20ajudar%3F"
        }
      >
        <IconBrandWhatsapp className={`text-vivencie ` } size={40} stroke={1}/>
      </Link>

  );
};

export default Whatsapp;
