import React from "react";
import { useTranslation } from "react-i18next";

export const SEO: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isEn = i18n.language === "en";
  const url = isEn
    ? "https://ivangonzalez.co/"
    : `https://ivangonzalez.co/${i18n.language}`;

  return (
    <>
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <html lang={i18n.language} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta
        property="og:image"
        content="https://ivangonzalez.co/assets/images/profile.webp"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={t("meta.title")} />
      <meta property="twitter:description" content={t("meta.description")} />
      <meta
        property="twitter:image"
        content="https://ivangonzalez.co/assets/images/profile.webp"
      />
    </>
  );
};
