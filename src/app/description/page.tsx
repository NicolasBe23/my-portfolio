"use client";

import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center text-lg gap-10 mt-24">
      <div className="flex flex-col items-center justify-center gap-2 text-lg">
        <h1 className="text-center">{t("description.education.part1")}</h1>
        <h1 className="text-center">{t("description.education.part2")}</h1>
        <h1 className="text-center">{t("description.education.part3")}</h1>
      </div>
      <div className="text-xl font-bold">
        <h1 className="text-center">
          React, Node.js, Next.js, Tailwind CSS, TypeScript, PostgreSQL
        </h1>
      </div>
    </div>
  );
}
