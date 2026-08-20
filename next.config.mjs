/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  output: "export", // Use static export to prevent Vercel 404s on simple sites
  images: {
    unoptimized: true, // Required for static export
  }
};

export default withPWA(nextConfig);
