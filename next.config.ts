import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placehold.co/600x450')],
  },
};

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);
export default withNextIntl(nextConfig);
