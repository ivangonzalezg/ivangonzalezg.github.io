import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const SEO: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isEn = i18n.language === "en";
  const url = isEn
    ? "https://ivangonzalez.co/"
    : `https://ivangonzalez.co/${i18n.language}`;
  const imageUrl = `${url}${
    url.endsWith("/") ? "" : "/"
  }assets/images/profile.webp`;

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta
        name="keywords"
        content="Full Stack, React, React Native, Expo, AI, Backend, Supabase, Strapi, Firebase"
      />
      <meta
        name="author"
        content="Ivan Dario Gonzalez Garcia, contacto@ivangonzalez.co"
      />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:site_name"
        content="Ivan Gonzalez | Full Stack Developer"
      />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="375" />
      <meta property="og:image:height" content="500" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={t("meta.title")} />
      <meta name="twitter:description" content={t("meta.description")} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Portrait of Ivan Gonzalez" />
      <meta name="twitter:site" content="@ivangonzalezgrc" />
      <meta name="twitter:creator" content="@ivangonzalezgrc" />
    </>
  );
};
