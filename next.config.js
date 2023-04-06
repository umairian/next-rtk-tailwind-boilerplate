/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
