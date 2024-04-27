/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'


if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform({});
}
const nextConfig = {
  // output: 'export',
};

export default nextConfig;
