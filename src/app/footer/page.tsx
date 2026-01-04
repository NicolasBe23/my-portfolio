"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components";
import { useTranslation } from "react-i18next";
import { footerSocialLinks } from "@/constants";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const tooltipContent = footerSocialLinks.map((item) => ({
    href: item.href,
    icon: item.icon,
    tooltip: t(item.tooltipKey),
  }));

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
