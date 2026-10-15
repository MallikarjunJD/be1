/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Make sure the /photos folder is bundled with the photo route on Vercel.
  outputFileTracingIncludes: {
    "/api/photo/**": ["./photos/**/*"],
  },
};

export default nextConfig;
