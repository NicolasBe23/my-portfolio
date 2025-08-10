"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function MovieAppMobile() {
  const { t } = useTranslation();

  const carouselImages = [
    "/images/movie-app-mobile-1.jpg",
    "/images/movie-app-mobile-2.jpg",
    "/images/movie-app-mobile-3.jpg",
    "/images/movie-app-mobile-4.jpg",
  ];

  return (
    <div className="flex flex-col gap-14 items-center text-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">
          {t("projects.movie-app-mobile.title")}
        </h1>
        <p className="text-zinc-300 max-w-xl">
          {t("projects.movie-app-mobile.description")}
        </p>
      </div>

      <div className="flex justify-center w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {carouselImages.map((imageSrc, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Image
                  src={imageSrc}
                  alt={`${t("projects.movie-app-mobile.title")} - Screenshot ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex gap-8 flex-wrap justify-center mt-10">
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-medium flex items-center gap-2 w-fit transition cursor-pointer"
          asChild
        >
          <a
            href="https://github.com/NicolasBe23/movie-app-mobile"
            target="_blank"
          >
            <Github className="w-4 h-4" />
            GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-10 mt-8">
        <p className="text-zinc-300 text-sm max-w-md text-center">
          {t("projects.movie-app-mobile.download-expo-go")}
        </p>
        <Image
          src="/images/movie-app-qrcode.png"
          alt="QR Code do Movie App"
          width={200}
          height={200}
          className="rounded-lg border border-gray-700"
        />
      </div>
    </div>
  );
}
