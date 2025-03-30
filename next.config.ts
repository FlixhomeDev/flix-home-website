import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  // i18n: {
  //   locales: ["en", "pt", "es", "fr"],
  //   defaultLocale: "pt",
  // },
};

export default withNextIntl(nextConfig);
