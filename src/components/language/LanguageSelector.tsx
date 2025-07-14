"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/components";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components";
import { languages } from "@/public/i18n";

const languageLabels: Record<string, string> = {
  pt: "Português",
  en: "English",
};

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !i18n.isInitialized) {
    return (
      <Button
        variant="outline"
        className="w-[140px] justify-between bg-zinc-800/50 text-zinc-300 hover:text-zinc-100 border-zinc-700"
        disabled
      >
        {languageLabels[i18n.language] || i18n.language}
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className=" justify-between bg-zinc-800/50 text-zinc-300 hover:text-zinc-100 border-zinc-700"
        >
          {languageLabels[i18n.language] || i18n.language}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  value={languageLabels[language] || language}
                  key={language}
                  onSelect={() => {
                    i18n.changeLanguage(language);
                    setOpen(false);
                  }}
                >
                  {languageLabels[language] || language}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      language === i18n.language ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
