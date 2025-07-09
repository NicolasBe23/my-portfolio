"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/public/i18n";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <button
      className="px-3 py-1 rounded bg-zinc-800/50 text-zinc-300 hover:text-zinc-100 cursor-pointer"
      onClick={toggleLanguage}
    >
      {i18n.language}
    </button>
  );
}
