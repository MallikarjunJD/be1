/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  // Make sure the /photos folder is bundled with the photo route on Vercel.
  outputFileTracingIncludes: {
    "/api/photo/**": ["./photos/**/*"],
  },
};

export default nextConfig;
