"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, languages } from "../../public/i18n/settings";
import { useEffect, useState } from "react";

function getPreferredLanguage(): string {
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("preferred-language");
    if (savedLanguage && languages.includes(savedLanguage)) {
      return savedLanguage;
    }
  }

  if (typeof window !== "undefined") {
    const browserLanguage = navigator.language.split("-")[0];
    if (languages.includes(browserLanguage)) {
      return browserLanguage;
    }
  }

  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [i18n, setI18n] = useState<ReturnType<typeof createInstance> | null>(
    null
  );

  useEffect(() => {
    const instance = createInstance();
    const preferredLanguage = getPreferredLanguage();

    instance
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`../../public/i18n/locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions(preferredLanguage))
      .then(() => {
        setI18n(instance);
      });
  }, []);

  if (!i18n) {
    return <div>{children}</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
