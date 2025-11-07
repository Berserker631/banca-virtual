"use client";
import { useState } from "react";

interface DropDown2Props {
  label: string;
  showArrow?: boolean;
}

export default function DropDown2({ label, showArrow = true }: DropDown2Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between bg-[#FFFFFF] text-[#6B6B6B]  text-sm px-4 py-2 border border-[#DFE1DF] rounded-md min-w-[428px] min-h-12"
      >
        <span>{label}</span>
        {showArrow && <span>▼</span>}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg">
          <ul className="py-1"></ul>
        </div>
      )}
    </div>
  );
}
