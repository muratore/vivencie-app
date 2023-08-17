"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface CabecalhoProps {
  className?: string;
}

const Cabecalho = (props: CabecalhoProps) => {
  const path = usePathname();
  const [nav, setNav] = useState(false);

  return (
    <div
      className={` ${
        props.className ?? ""
      }  fixed flex w-screen z-30 px-8 md:px-16 xl:px-40 items-center justify-between h-30 `}
    >
      <nav className="flex items-center justify-between w-full ">
        <Logo />
     
        <div
          className={`
          ${  !nav
              ? "hidden"
              : "flex flex-col justify-start py-3 absolute top-36 left-0 bg-vivencie w-72"
          } text-white lg:flex items-center`}
        >
          <MenuItem
            className="text-left"
            url="/"
            selecionado={path === "/"}
            onClick={() => {
              setNav(false);
            }}
            texto="HOME"
          />
          <MenuItem
            url="/quemsomos"
            selecionado={path === "/quemsomos"}
            onClick={() => {
              setNav(false), console.log(path);
            }}
            texto="QUEM SOMOS"
          />

          <MenuItem
            url="/servicos"
            selecionado={path === "/servicos"}
            onClick={() => {
              setNav(false), console.log(!nav);
            }}
            texto="SERVIÇOS"
          />
          <MenuItem
            url="/atividades"
            selecionado={path === "/atividades"}
            onClick={() => setNav(false)}
            texto="ATIVIDADES"
          />
          <MenuItem
            url="/estrutura"
            selecionado={path === "/estrutura"}
            onClick={() => setNav(false)}
            texto="ESTRUTURA"
          />
          <MenuItem
            url="/contato"
            selecionado={path === "/contato"}
            onClick={() => setNav(false)}
            texto="CONTATO"
          />
          <div className="flex w-full lg:w-20 self-start pl-2 bg-zinc-500 lg:bg-transparent gap-2">
            <Link
              className=" hover:text-zinc-300 duration-300 "
              href={"https://www.instagram.com/vivencieresidencialsenior/"}
            >
              {" "}
              <IconBrandInstagram />
            </Link>{" "}
            |
            <Link
              className=" hover:text-zinc-300 duration-300 "
              href={"https://www.facebook.com/vivencie.residencial.senior?mibextid=LQQJ4d"}
            >
              {" "}
              <IconBrandFacebook />
            </Link>
          </div>
        </div>
        {!nav ? (
          <div
            onClick={() => {
              setNav(true);
            }}
            className="lg:hidden cursor-pointer"
          >
            <IconMenu2 className="text-white" size={36} />
          </div>
        ) : (
          <div
            onClick={() => {
              setNav(false);
            }}
            className="flex lg:hidden cursor-pointer"
          >
            <IconX className="text-white" size={36} />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Cabecalho;
