"use client";
import { useEffect, useState } from "react";
import { AccountDetail } from "../types/types";
import { GoCopy } from "react-icons/go";
import Image from "next/image";

export default function UserPage({ accountId = 12345 }) {
  const [userAccount, setAccount] = useState<AccountDetail[]>([]);
  const [error, setError] = useState<string | null>(null);

  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat(currency === "NIO" ? "es-NI" : "en-US", {
      style: "currency",
      currency: currency === "NIO" ? "NIO" : "USD",
      minimumFractionDigits: 2,
    }).format(value);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5566/accounts/${accountId}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setAccount(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchUser();
  }, [accountId]);

  return (
    <div className="flex flex-row gap-10">
      {userAccount.map((account: AccountDetail, index: number) => (
        <div
          key={index}
          className="flex flex-row justify-between bg-white text-black border border-gray-300 w-[355px] h-[150px] rounded-[10px] p-4"
        >
          <div className="flex justify-between flex-col">
            <div>
              <h1 className="font-semibold">{account.currency} CUENTA</h1>
              <div className="flex flex-row">
                <h1 className="bg-[#EDF5F2] text-[#3B8668] text-[14px]">
                  {account.account_number}
                </h1>
                <GoCopy className="bg-[#EDF5F2] text-[#3B8668] text-[14px] m-1 cursor-pointer" />
              </div>
            </div>
            <h1 className="font-semibold">
              {formatCurrency(account.balance, account.currency)}
            </h1>
          </div>
          <div>
            <Image
              width={80}
              height={60}
              className="rounded-full w-12 h-12 overflow-hidden"
              src={
                account.currency === "NIO"
                  ? "/images/nic_flag.webp"
                  : "/images/usa_flag.jpg"
              }
              alt={`${account.currency} flag`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
