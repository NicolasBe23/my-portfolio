"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Github } from "lucide-react";
import { TvMinimalPlay } from "lucide-react";
import { Button } from "@/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FoodDeliveryWebApp() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">
          {t("projects.food-delivery-web-app.title")}
        </h1>
        <p className="text-zinc-300 text-center">
          {t("projects.food-delivery-web-app.description")}
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/fooddelivery.png"
            alt="Food Delivery Web App"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
          asChild
        >
          <Link
            href="https://github.com/NicolasBe23/project-one"
            target="_blank"
          >
            <Github className="w-4 h-4" />
            GitHub <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
          asChild
        >
          <Link
            href="https://project-one-ten-alpha.vercel.app/"
            target="_blank"
          >
            <TvMinimalPlay className="w-4 h-4" />
            Live Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
