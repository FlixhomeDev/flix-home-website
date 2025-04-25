"use client";
import { useState } from "react";

interface SwitchPriceProps {
  onToggle: (isMonthly: boolean) => void;
}

export default function SwitchPrice({ onToggle }: SwitchPriceProps) {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
    onToggle(!isMonthly);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`py-1 px-3 rounded-full text-sm font-medium ${
          isMonthly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => {
          setIsMonthly(true);
          onToggle(true);
        }}
      >
        Mensalmente
      </button>
      <div className="relative w-10 h-5 rounded-full bg-gray-300 cursor-pointer">
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            isMonthly ? "translate-x-0" : "translate-x-5"
          }`}
          onClick={handleToggle}
        />
      </div>
      <button
        className={`py-1 px-3 rounded-full text-sm font-medium ${
          !isMonthly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => {
          setIsMonthly(false);
          onToggle(false);
        }}
      >
        Anual
        <span className="ml-1 text-xs bg-green-300 text-green-800 py-0.5 px-1.5 rounded-full">
          SALVAR 16%
        </span>
      </button>
    </div>
  );
}
