"use client";
import { Container } from "./Container";
import { useTranslation, LinkWithLocale } from "next-export-i18n";

export const Cta = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">{t("cta.title")}</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {t("cta.description")}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:cs@aplikasiku.web.id"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </Container>
  );
};
