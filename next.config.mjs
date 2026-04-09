/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Якщо збірка йде на GitHub — додаємо префікс, якщо на Vercel — ні
  basePath: process.env.GITHUB_ACTIONS ? '/endocrinologist-landing-page' : '',
}

export default nextConfig
