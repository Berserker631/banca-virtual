"use client";
import { useEffect, useState } from "react";
import { Transaction } from "../types/types";
import { useRouter } from "next/navigation";

export default function Tabla() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch(
          "http://localhost:5566/accounts/123456789/transactions"
        );
        if (!res.ok) throw new Error("Error al obtener transacciones");
        const data = await res.json();
        setTransactions(data.items || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-end items-center mb-4">
        <a
          href="#"
          className="text-sm text-gray-900 hover:underline"
          onClick={() => router.push("/transacciones")}
        >
          Ver todas
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300 text-gray-500 text-sm">
              <th className="pb-2">Fecha</th>
              <th className="pb-2">Descripción</th>
              <th className="pb-2 text-right">Monto USD</th>
              <th className="pb-2 text-right">Tipo</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {transactions.length > 0 ? (
              transactions.map((tx) => (
                <tr
                  key={tx.transaction_number}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3">
                    {new Date(tx.transaction_date).toLocaleDateString("es-NI")}
                  </td>
                  <td>{tx.description}</td>
                  <td className="text-right">
                    {tx.amount.currency === "USD"
                      ? tx.amount.value.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : tx.amount.value}
                  </td>
                  <td className="text-right">
                    {tx.transaction_type === "Credit" ? "Crédito" : "Débito"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No hay transacciones
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
