"use client";

import Image from "next/image";
import logo from "../../../../public/images/LafiseLogo.png";
import Dropdown from "../DropDown";
import { BiTransfer } from "react-icons/bi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegMoneyBill1, FaGear } from "react-icons/fa6";
import { FaUserCheck, FaMoneyCheck } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { MdAdminPanelSettings, MdSavings } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar({ open }: { open: boolean }) {
  const router = useRouter();

  const [currency, setCurrency] = useState("NIO");
  const [amount, setAmount] = useState(35.1);

  //Rutas y opciones del menu
  const menus = [
    { name: "Tablero", icon: BsFillGrid1X2Fill, path: "/tablero" },
    { name: "Transferir", icon: BiTransfer, path: "/transferencia" },
    { name: "Pagar", icon: FaRegMoneyBill1, path: "/pagar" },
    { name: "Mis transacciones", icon: FaUserCheck, path: "/transacciones" },
    { name: "Gestionar", icon: GrRefresh, path: "/gestionar" },
    { name: "Cheques", icon: FaMoneyCheck, path: "/cheques" },
    { name: "Paganet", icon: PiContactlessPaymentFill, path: "/paganet" },
    { name: "Administrar", icon: MdAdminPanelSettings, path: "/administrar" },
    { name: "Ahorro automatico", icon: MdSavings, path: "/ahorro-automatico" },
    { name: "Configuracion", icon: FaGear, path: "/configuracion" },
  ];

  //Tipos de tasa de cambio
  const currencyValues: Record<string, number> = {
    NIO: 35.1,
    USD: 1,
    EUR: 0.91,
  };

  function handleCurrencyChange(selectedCurrency: string) {
    setCurrency(selectedCurrency);
    setAmount(currencyValues[selectedCurrency]);
  }

  return (
    <div
      className={`h-screen bg-[#F9FAF9] text-black flex flex-col w-[280px] px-2 py-4 gap-2 top-0 left-0 p-4 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-center h-[100px] cursor-pointer">
        <Image
          src={logo}
          alt="Logo"
          width={192}
          height={63}
          onClick={() => router.push("/tablero")}
        />
      </div>

      {/* MENU */}
      <ul className="flex flex-col gap-1 border-b-2 border-gray-300 py-3.5">
        {menus.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className=" hover:bg-[#EDF5F2] hover:text-[#3B8668] h-12 cursor-pointer text-sm flex justify-between items-center font-poppins font-medium px-4 py-3"
              onClick={() => router.push(item.path)}
            >
              <div className="flex flex-row text-base gap-2 text-[14px] items-center">
                <Icon />
                {item.name}
              </div>
              <IoIosArrowForward />
            </li>
          );
        })}
      </ul>

      {/* FOOTER */}
      <div className="flex flex-col text-xs text-center h-[231px] gap-3.5">
        <div>
          <h1 className="text-left font-poppins font-semibold text-base">
            Tasa de cambio
          </h1>
        </div>
        <div className="flex flex-row justify-between gap-1.5">
          <Dropdown onCurrencyChange={handleCurrencyChange} />
          <Dropdown onCurrencyChange={handleCurrencyChange} />
        </div>
        <div className="flex flex-row justify-between gap-1.5 p-2.5 text-[16px]">
          <h2>NIO: 35.1</h2>
          <BiTransferAlt className="text-[18px] text-white rounded-full bg-[#3b8668]" />
          <h2>USD: 35.95</h2>
        </div>
      </div>
    </div>
  );
}
