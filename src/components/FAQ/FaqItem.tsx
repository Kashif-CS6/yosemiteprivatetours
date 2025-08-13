"use client";

import { useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="bg-white border border-gray-300 rounded-2xl px-5 py-6 cursor-pointer transition-all "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold tracking-wide w-64 md:w-auto text-gray-800">{question}</h3>
        <button className="w-9 flex items-center justify-center h-9 border rounded-full border-gray-300">
          {isOpen ? (
            <IoIosClose size={22} className="text-gray-500" />
          ) : (
            <IoIosAdd size={22} className="text-gray-500" />
          )}
        </button>
      </div>

      {isOpen && (
        <p className="mt-2 text-gray-600 text-[15px] font-[500]  text-start leading-relaxed pr-10">
          {answer}
        </p>
      )}
    </div>
  );
}
