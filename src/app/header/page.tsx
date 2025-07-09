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
    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
      <div
        className="text-2xl cursor-pointer hover:text-muted-foreground transition"
        onClick={() => router.push("/")}
      >
        Nicolas Silva
      </div>
      <div className="flex gap-6 items-center">
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
        {tooltipContent.map((item, idx) => (
          <TooltipProvider key={idx} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent className="text-zinc-300 p-1 text-sm">
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <LanguageSelector />
      </div>
    </div>
  );
}
