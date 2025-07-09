"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "../../public/i18n/settings";
import { useEffect, useState } from "react";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [i18n, setI18n] = useState<ReturnType<typeof createInstance> | null>(
    null
  );

  useEffect(() => {
    const instance = createInstance();

    instance
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`../../public/i18n/locales/${language}/${namespace}.json`)
        )
      )
      .init(getOptions())
      .then(() => {
        setI18n(instance);
      });
  }, []);

  if (!i18n) {
    return <div>{children}</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
