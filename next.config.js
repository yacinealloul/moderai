/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.discordapp.net',
          port: '',
          pathname: '*',
        },
      ],
    },
  }

