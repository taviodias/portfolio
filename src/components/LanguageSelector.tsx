import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FlagBR, FlagUS, FlagES } from "./Icons/Flags";
import { ChevronDown } from "lucide-react";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = {
    pt: {
      label: "Português",
      Flag: FlagBR,
    },
    en: {
      label: "English",
      Flag: FlagUS,
    },
    es: {
      label: "Español",
      Flag: FlagES,
    },
  };

  type LanguageKey = keyof typeof languages;

  const currentLangKey = (i18n.language?.split("-")[0] as LanguageKey) || "en";
  const currentLang = languages[currentLangKey] || languages.en;
  const CurrentFlag = currentLang.Flag;

  const handleLanguageChange = (lang: LanguageKey) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-primary/90"
          aria-label="Alterar idioma"
        >
          <CurrentFlag className="w-6 h-6 rounded-full object-cover" />
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="min-w-35">
        {Object.entries(languages).map(([key, { label, Flag }]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as LanguageKey)}
            className={`cursor-pointer gap-3 p-2 font-medium ${
              currentLangKey === key ? "bg-accent text-accent-foreground" : ""
            }`}
          >
            <Flag className="w-5 h-5 rounded-full" />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
