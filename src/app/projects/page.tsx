"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const { t } = useTranslation();

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-12 text-2xl md:text-3xl font-bold text-zinc-100">
          {t("projects.title")}
        </h1>
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-10 w-full">
        <div className="border border-zinc-800 rounded-lg p-4 md:p-8 w-full md:w-[32rem] flex flex-col justify-between">
          <div>
            <h1 className="font-bold mb-2 text-zinc-100">
              {t("projects.eye-connect.title")}
            </h1>
            <p className="text-zinc-300 mb-8">
              {t("projects.eye-connect.description")}
            </p>
          </div>
          <button
            onClick={() => router.push("/projects/see-project/eye-connect")}
            className="text-zinc-100 underline underline-offset-4 text-lg font-medium flex items-center gap-2 w-fit hover:text-zinc-300 transition"
          >
            See project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="border border-zinc-800 rounded-lg p-4 md:p-8 w-full md:w-[32rem] flex flex-col justify-between">
          <div>
            <h1 className="font-bold mb-2 text-zinc-100">
              {t("projects.houses-papon.title")}
            </h1>
            <p className="text-zinc-300 mb-8">
              {t("projects.houses-papon.description")}
            </p>
          </div>
          <button className="text-zinc-100 underline underline-offset-4 text-lg font-medium flex items-center gap-2 w-fit hover:text-zinc-300 transition">
            See project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
