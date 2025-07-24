"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-12 text-2xl md:text-3xl font-bold text-zinc-100">
          {t("projects.title")}
        </h1>
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-10 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-800 rounded-lg p-4 md:p-8 w-full md:w-[32rem] flex flex-col justify-between"
          >
            <div>
              <h1 className="font-bold mb-2 text-zinc-100">
                {t(project.titleKey)}
              </h1>
              <p className="text-zinc-300 mb-8">{t(project.descriptionKey)}</p>
              {project.status === "development" && (
                <span className="inline-block px-2 py-1 text-xs bg-yellow-600/20 text-yellow-400 rounded-full mb-4">
                  {t("projects.house-management.development")}
                </span>
              )}
            </div>
            <button
              onClick={() => router.push(project.route)}
              className="text-zinc-100 underline underline-offset-4 text-lg font-medium flex items-center gap-2 w-fit hover:text-zinc-300 transition cursor-pointer"
            >
              {t("projects.see-project")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
