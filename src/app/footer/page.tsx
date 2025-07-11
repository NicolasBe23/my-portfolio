"use client";

import { Github, Linkedin, Mail, Phone, FileUser } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const tooltipContent = [
    {
      href: "/pdf/Resume_-_Nicolas_Silva.pdf",
      icon: <FileUser size={18} />,
      tooltip: t("tooltip.download"),
    },
    {
      href: "mailto:nicolasbezerra13@gmail.com",
      icon: <Mail size={18} />,
      tooltip: t("tooltip.email"),
    },
    {
      href: "tel:+351968899318",
      icon: <Phone size={18} />,
      tooltip: t("tooltip.phone"),
    },
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
  ];

  return (
    <div className="flex justify-center items-center border-b border-gray-800 pb-8 mt-10">
      <div className="flex gap-14">
        {tooltipContent.map((item, idx) => (
          <TooltipProvider key={idx} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {item.icon}
                </a>
              </TooltipTrigger>
              <TooltipContent className="p-2 text-sm">
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
