/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Якщо ми на GitHub (є GITHUB_ACTIONS), додаємо префікс. Якщо на Vercel — ні.
  basePath: process.env.GITHUB_ACTIONS ? '/endocrinologist-landing-page' : '',
}

export default nextConfig