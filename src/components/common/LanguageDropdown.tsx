"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

type LanguageOption = {
  code: string;
  name: string;
  flag: string;
};

const languages: LanguageOption[] = [
  { code: "en", name: "English", flag: "/england.png" },
  { code: "ur", name: "Urdu", flag: "/pakistan.png" },
  { code: "hi", name: "Hindi", flag: "/india.png" },
];

const LanguageDropdown: React.FC = () => {
  const [selected, setSelected] = useState<LanguageOption>(languages[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (lang: LanguageOption) => {
    setSelected(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block border-l border-gray-300 pl-2 mr-8"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <Image src={selected.flag} alt={selected.name} width={20} height={20} />
        <span>{selected.name}</span>
      </button>

      {open && (
        <ul className="absolute left-0 mt-2 w-32 border-none bg-white shadow-md border rounded z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
