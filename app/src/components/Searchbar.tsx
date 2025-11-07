// components/SearchBar.tsx
"use client";

import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md bg-white  shadow-sm px-4 py-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
        className="flex-1 outline-none text-sm text-gray-700"
      />
      <SlMagnifier />
    </form>
  );
}