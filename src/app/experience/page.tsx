"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/public/i18n";

interface ExperienceProps {
  startDate: string;
  company: string;
  companyKey: string;
  stack?: string[];
  description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  startDate,
  company,
  companyKey,
  stack = [],
  description,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-8 pb-12">
      <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-800"></div>

      <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-zinc-800"></div>

      <div className="flex flex-col gap-4">
        <span className="text-sm text-zinc-500">{startDate}</span>

        <div>
          <h3 className="text-xl font-medium text-zinc-100">{company}</h3>
          <p className="text-lg text-zinc-300">
            {t(`experience.companies.${companyKey}.role`)}
          </p>
        </div>

        <p className="text-zinc-400">{description}</p>

        {stack && stack.length > 0 && (
          <div>
            <p className="mb-2 text-zinc-300">{t("experience.stack")}:</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      startDate: `${t("experience.dates.feb")} - ${t(
        "experience.dates.jul"
      )} - 2025`,
      company: "InflightIT",
      companyKey: "inflightit",
      stack: [
        "React",
        "Next",
        "JavaScript",
        "TypeScript",
        "Material UI",
        "Strapi",
      ],
      description: t("experience.companies.inflightit.description"),
    },
    {
      startDate: "2021 - 2023",
      company: "Otica Girêh",
      companyKey: "otica-gireh",
      description: t("experience.companies.otica-gireh.description"),
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="mb-12 text-3xl font-bold text-zinc-100">
          {t("experience.title")}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
