import type { NextConfig } from "next";



/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to build a static HTML site
  images: {
    unoptimized: true, // THIS IS THE FIX FOR BIGROCK
  },
}

module.exports = nextConfig