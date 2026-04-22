/** @type {import('next').NextConfig} */

const isGithub = process.env.GITHUB_ACTIONS === 'true'
const repo = 'endocrinologist-landing-page'

const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: isGithub ? `/${repo}` : '',
  assetPrefix: isGithub ? `/${repo}/` : '',
}

export default nextConfig