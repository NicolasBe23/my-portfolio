"use client";

import { useTranslation } from "react-i18next";
import LogoLoop from "../../components/logosLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiExpo,
  SiDocker,
} from "react-icons/si";

export default function Description() {
  const { t } = useTranslation();

  const techLogos = [
    {
      node: <SiReact className="text-white" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiExpo className="text-white" />,
      title: "Expo",
      href: "https://expo.dev",
    },
    {
      node: <SiNextdotjs className="text-white" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiNodedotjs className="text-white" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiTypescript className="text-white" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss className="text-white" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPostgresql className="text-white" />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiDocker className="text-white" />,
      title: "Docker",
      href: "https://www.docker.com",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-base md:text-lg gap-4 md:gap-10 mt-4 md:mt-16 w-full">
      <div className="flex flex-col w-full text-center items-center justify-center gap-2 text-lg">
        <h1>{t("description.education.part1")}</h1>
        <h1>{t("description.education.part2")}</h1>
        <h1>{t("description.education.part3")}</h1>
      </div>

      <div className="w-full max-w-4xl">
        <div className="text-xl font-bold text-center mb-8">
          <h2>{t("description.technologies")}</h2>
        </div>
        <div className="h-20 relative overflow-hidden bg-background rounded-lg">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={32}
            gap={40}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="var(--background)"
            ariaLabel={t("description.technologies")}
          />
        </div>
      </div>
    </div>
  );
}
