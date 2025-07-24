"use client";

import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center text-base md:text-lg gap-4 md:gap-10 mt-4 md:mt-24 w-full">
      <div className="flex flex-col w-full text-center items-center justify-center gap-2 text-lg">
        <h1>{t("description.education.part1")}</h1>
        <h1>{t("description.education.part2")}</h1>
        <h1>{t("description.education.part3")}</h1>
      </div>
      <div className="text-xl font-bold">
        <h1 className="text-center">
          React, React Native, Node.js, Next.js, Tailwind CSS, TypeScript,
          PostgreSQL
        </h1>
      </div>
    </div>
  );
}
