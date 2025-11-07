"use client";
import { useState } from "react";

interface DropdownProps {
  onCurrencyChange: (currency: string) => void;
}

export default function DropDown({ onCurrencyChange }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const [currency, setCurrency] = useState("Córdoba");

    function handleCurrencyChange(selectedCurrency: string) {
      setCurrency(selectedCurrency);
      setOpen(false);
    }

    return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#FFFFFF] text-[#6B6B6B] px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[100px]"
      >
        {currency} ▼
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleCurrencyChange('Córdoba')}>Córdoba</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleCurrencyChange('USD')}>USD</li>
          </ul>
        </div>
      )}
    </div>
  );
}
