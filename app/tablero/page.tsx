"use client";

import Account from "../src/components/Account";
import Cards from "../src/components/Cards";
import Tabla from "../src/components/Tabla";

export default function TableroPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-black">Mis Tarjetas</h2>
      <div className="flex flex-row items-center bg-[#EDF5F2] w-[1550px] h-64 p- gap-10 overflow-x-auto  text-black">
        <Cards color="bg-[#015C3D]" />
        <Cards color="bg-[#0c1131]" />
        <Cards color="bg-[#1f1f1f]" />
      </div>
      <h1 className="text-lg font-semibold text-black">Cuentas</h1>
      <div className="flex flex-row overflow-x-auto pb-4 w-[1550px] bg-[#EDF5F2]">
        <Account />
      </div>
      <h2 className="text-lg font-semibold text-black  ">
        Transacciones recientes
      </h2>
      <div className=" w-[1550px] h-[273px] bg-[#EDF5F2]">
        <Tabla />
      </div>
    </div>
  );
}
