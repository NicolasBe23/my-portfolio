"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { LanguageSelector } from "@/components";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Header() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const tooltipContent = [
    {
      href: "https://github.com/NicolasBe23",
      icon: <Github size={18} />,
      tooltip: t("tooltip.github"),
    },
    {
      href: "https://www.linkedin.com/in/nicolas-bezerra/",
      icon: <Linkedin size={18} />,
      tooltip: t("tooltip.linkedin"),
    },
    {
      href: "mailto:nicolasbezerra13@gmail.com",
      icon: <Mail size={18} />,
      tooltip: t("tooltip.email"),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-800 pb-4 px-2 md:px-0">
      <div
        className="text-xl md:text-2xl cursor-pointer hover:text-muted-foreground transition leading-tight md:leading-normal text-center md:text-left mb-4 md:mb-0"
        onClick={() => router.push("/")}
      >
        Nicolas Silva
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center md:justify-end">
        <div className="flex gap-6 md:gap-6 items-center mb-2 md:mb-0">
          <Link className="hover:text-muted-foreground" href="/#projects">
            {t("navigation.projects")}
          </Link>
          <Link className="hover:text-muted-foreground" href="/#contact">
            {t("navigation.contact")}
          </Link>
          <Link
            className="hover:text-muted-foreground"
            href="/pdf/Resume_-_Nicolas_Silva.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("navigation.resume")}
          </Link>
        </div>
        <div className="flex gap-6 md:gap-4 items-center ">
          {tooltipContent.map((item, idx) => (
            <TooltipProvider key={idx} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="p-1 text-sm">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}
