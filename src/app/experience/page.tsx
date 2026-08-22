"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/public/i18n";
import { experiences } from "@/constants/experience";

interface ExperienceProps {
  dateKey: string;
  companyKey: string;
  stack?: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  dateKey,
  companyKey,
  stack = [],
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-4 pb-8 md:pl-8 md:pb-12">
      <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-800" />

      <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-zinc-800" />

      <div className="flex flex-col gap-2 md:gap-4">
        <span className="text-xs text-zinc-500 md:text-sm">{t(dateKey)}</span>

        <div>
          <h3 className="text-lg font-medium text-zinc-100 md:text-xl">
            {t(`experience.companies.${companyKey}.name`)}
          </h3>

          <p className="text-base text-zinc-300 md:text-lg">
            {t(`experience.companies.${companyKey}.role`)}
          </p>
        </div>

        <p className="text-sm text-zinc-400 md:text-base">
          {t(`experience.companies.${companyKey}.description`)}
        </p>

        {stack.length > 0 && (
          <div>
            <p className="mb-2 text-zinc-300">{t("experience.stack")}:</p>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
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

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-2 md:px-4">
        <h2 className="mb-8 text-2xl font-bold text-zinc-100 md:mb-12 md:text-3xl">
          {t("experience.title")}
        </h2>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.companyKey} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
