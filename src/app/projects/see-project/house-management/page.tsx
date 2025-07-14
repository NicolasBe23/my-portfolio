"use client";

import { useTranslation } from "react-i18next";
import { TvMinimalPlay } from "lucide-react";
import { Button } from "@/components";
import { ArrowRight } from "lucide-react";

export default function HouseManagement() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">
          {t("projects.house-management.title")}
        </h1>
        <p className="text-zinc-300 text-center">
          {t("projects.house-management.description")}
        </p>
      </div>
      <div className="flex gap-8 justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
          disabled
        >
          <div className="flex items-center gap-2">
            <TvMinimalPlay className="w-4 h-4" />
            Em desenvolvimento <ArrowRight className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </div>
  );
}
