import { AvailableLangs, useStrings } from "@Hooks/useStrings";
import { de } from "./de";
import { en } from "./en";
import { zh } from "./zh";
import { pt } from "./pt";
import { az } from "./az"
import React from "react";

/**
 * English is the default language
 */
export type StringDeclaration = keyof typeof en;

export type AvailableStrs = "en" | "de" | "zh" | "pt" | "az";
export type Strs = {
  [code in AvailableStrs]: Partial<Record<StringDeclaration, str>>;
};

export const strs: Strs = {
  en: en,
  de: de,
  zh: zh,
  pt: pt,
  az: az,
};

export const useLanguageMap = (): arr<AvailableLangs> => {
  const { currentLanguage } = useStrings();

  const regionNames = React.useMemo(
    () =>
      new Intl.DisplayNames([currentLanguage], {
        type: "language",
      }),
    [currentLanguage]
  );

  return Object.keys(strs).map((key) => ({
    name: regionNames.of(key) || "Unknown",
    value: key,
  }));
};
