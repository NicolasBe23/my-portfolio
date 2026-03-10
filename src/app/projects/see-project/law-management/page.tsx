"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowRight, Github, TvMinimalPlay } from "lucide-react";
import { Button } from "@/components";
import Link from "next/link";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  "/images/law-management-01.png",
  "/images/law-management-02.png",
  "/images/law-management-03.png",
  "/images/law-management-04.png",
  "/images/law-management-05.png",
  "/images/law-management-06.png",
];

export default function LawManagement() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-14 items-center text-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">
          {t("projects.law-management.title")}
        </h1>
        <p className="text-zinc-300 max-w-3xl">
          {t("projects.law-management.description")}
        </p>
        <div className="flex justify-center w-full">
          <Carousel
            className="w-full max-w-[18rem] sm:max-w-xl md:max-w-3xl"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
          >
            <CarouselContent>
              {carouselImages.map((imageSrc, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border border-zinc-800/70 bg-zinc-900/30">
                      <div className="flex items-center justify-center p-0">
                        <Image
                          src={imageSrc}
                          alt={`${t("projects.law-management.title")} - Screenshot ${index + 1}`}
                          width={1200}
                          height={675}
                          sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 40vw"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-8 justify-center flex-wrap">
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
          asChild
        >
          <Link
            href="https://github.com/NicolasBe23/lawyer-project"
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
          <Link href="https://lawyermanager-front.onrender.com" target="_blank">
            <TvMinimalPlay className="w-4 h-4" />
            Live Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
