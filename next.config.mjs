/** @type {import('next').NextConfig} */

const repo = 'endocrinologist-landing-page'

// GitHub Pages завжди билдить production
const isGithubPages =
  process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  output: 'export',

  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
}

export default nextConfig