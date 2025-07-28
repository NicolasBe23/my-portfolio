"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  route: string;
  status?: "development" | "completed";
}

export default function Projects() {
  const { t } = useTranslation();
  const router = useRouter();

  const projects: Project[] = [
    {
      id: "eye-connect",
      titleKey: "projects.eye-connect.title",
      descriptionKey: "projects.eye-connect.description",
      route: "/projects/see-project/eye-connect",
      status: "completed",
    },
    {
      id: "house-management",
      titleKey: "projects.house-management.title",
      descriptionKey: "projects.house-management.description",
      route: "/projects/see-project/house-management",
      status: "development",
    },
    {
      id: "food-delivery-web-app",
      titleKey: "projects.food-delivery-web-app.title",
      descriptionKey: "projects.food-delivery-web-app.description",
      route: "/projects/see-project/food-delivery-web-app",
      status: "completed",
    },
    {
      id: "gemini-chatbot-clone",
      titleKey: "projects.gemini-chatbot-clone.title",
      descriptionKey: "projects.gemini-chatbot-clone.description",
      route: "/projects/see-project/gemini-chatbot-clone",
      status: "completed",
    },
    {
      id: "chronos-pomodoro-timer",
      titleKey: "projects.chronos-pomodoro-timer.title",
      descriptionKey: "projects.chronos-pomodoro-timer.description",
      route: "/projects/see-project/chronos-pomodoro-timer",
      status: "completed",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-12 text-2xl md:text-3xl font-bold text-zinc-100">
          {t("projects.title")}
        </h1>
      </div>

      <div className="w-full max-w-6xl px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="border border-zinc-800 rounded-lg p-4 md:p-6 h-full flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                      <h1 className="font-bold mb-3 text-zinc-100 text-lg">
                        {t(project.titleKey)}
                      </h1>
                      <p className="text-zinc-300 mb-6 text-sm leading-relaxed">
                        {t(project.descriptionKey)}
                      </p>
                      {project.status === "development" && (
                        <span className="inline-block px-3 py-1 text-xs bg-yellow-600/20 text-yellow-400 rounded-full mb-4">
                          {t("projects.house-management.development")}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => router.push(project.route)}
                      className="text-zinc-100 underline underline-offset-4 text-base font-medium flex items-center gap-2 w-fit hover:text-zinc-300 transition cursor-pointer mt-auto"
                    >
                      {t("projects.see-project")}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-zinc-800" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-zinc-800" />
        </Carousel>

        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-zinc-400 text-sm">
            {t("projects.swipe-to-see-more")}
          </p>
        </div>
      </div>
    </div>
  );
}
