import DropDown2 from "../src/components/DropDown2";
import Stepper from "../src/components/stepper";

export default function TransferenciaPage() {
  return (
    <div className="flex  justify-between h-[750px] flex-col p-6 bg-white gap-3">
      <div>
        <h1 className="text-2xl  text-black font-bold mb-4">Transferir</h1>
        <div className="flex flex-col justify-center items-center w-full h-[121px]">
          <span>
            <Stepper />
          </span>
        </div>
        <div className="flex flex-col justify-center bg-[#F9FAF9] items-center w-full h-[126px]">
          <div className="grid grid-cols-2 w-[900px] h-[78px] gap-6">
            <div>
              <h1 className=" text-black font-semibold">Tipo de transaccion</h1>
            </div>
            <div>
              <h1 className=" text-black font-semibold">Cuenta</h1>
            </div>
            <div>
              <DropDown2 label="Terceros" />
            </div>
            <div>
              <DropDown2 label="10424667" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#F9FAF9] w-full h-[180px] gap-12">
          <div className="grid grid-cols-2 gap-6 h-20">
            <div>
              <input
                type="text"
                className="flex justify-between bg-[#FFFFFF] text-[#6B6B6B]  text-sm px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[428px] min-h-12"
                placeholder="Cancelacion de prestamo"
              />
            </div>
            <div>
              <input
                type="text"
                className="flex justify-between bg-[#FFFFFF] text-[#6B6B6B]  text-sm px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[428px] min-h-12"
                placeholder="Concepto de credito"
              />
            </div>
            <div>
              <input
                type="text"
                className="flex justify-between bg-[#FFFFFF] text-[#6B6B6B]  text-sm px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[428px] min-h-12"
                placeholder="Refencia"
              />
            </div>
            <div>
              <input
                type="text"
                className="flex justify-between bg-[#FFFFFF] text-[#6B6B6B]  text-sm px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[428px] min-h-12"
                placeholder="Enviar informacion a:"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center  h-[55px] w-[1500px]">
        <div className="flex items-center gap-10">
          <button className="h-12 w-[120px] text-[#00593B] text-sm border-2 border-[#00593B] cursor-pointer">
            Atras
          </button>
          <button className="h-12 w-[122px] text-[#ffffff] text-sm  bg-[#00593B] cursor-pointer">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
