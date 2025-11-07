import { FaCheckCircle } from "react-icons/fa";

export default function Stepper() {
  return (
    <div className="w-3xl">
      <ul className="relative flex flex-row gap-x-2">
        <li className="flex justify-center flex-col shrink basis-0 flex-1 group">
          <div className="ml-10 min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="w-fit flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              <FaCheckCircle className="text-3xl text-[#3b8668]" />
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className=" flex flex-col items-center mt-3 w-fit">
            <span className="block text-xs font-medium text-gray-400">
              Paso 1
            </span>
            <span className="block text-sm font-medium text-gray-800">
              Cuenta Origen
            </span>
          </div>
        </li>

        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 ml-10 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="w-fit flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              <FaCheckCircle className="text-3xl text-[#3b8668]" />
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className=" flex flex-col items-center mt-3 w-fit">
            <span className="block text-xs font-medium text-gray-400">
              Paso 2
            </span>
            <span className="block text-sm font-medium text-gray-800">
              Cuenta Destino
            </span>
          </div>
        </li>

        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 ml-10 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              <FaCheckCircle className="text-3xl text-[#3b8668]" />
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className=" flex flex-col items-center mt-3 w-fit">
            <span className="block text-xs font-medium text-gray-400">
              Paso 3
            </span>
            <span className="block text-sm font-medium text-gray-800">
              Monto a transferir
            </span>
          </div>
        </li>

        <li className="shrink basis-0 flex-1 group">
          <div className="min-w-7 ml-10 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
              <FaCheckCircle className="text-3xl text-[#3b8668]" />
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
          </div>
          <div className=" flex flex-col items-center mt-3 w-fit">
            <span className="block text-xs font-medium text-gray-400">
              Paso 4
            </span>
            <span className="block text-sm font-medium text-gray-800">
              Datos adicionales
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
