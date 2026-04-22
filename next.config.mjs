/** @type {import('next').NextConfig} */

const repo = 'endocrinologist-landing-page'

const isGithub =
  process.env.GITHUB_ACTIONS === 'true'

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