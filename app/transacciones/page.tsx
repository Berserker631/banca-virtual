import Tabla from "../src/components/Tabla";

export default function TransaccionesPage() {
  return (
    <div className="flex-1 p-6 bg-white">
      <h1 className="text-2xl  text-black font-bold mb-4">Mis Transacciones</h1>
      <Tabla />
    </div>
  );
}
