const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; connect-src 'self' https://site-backend-65se.onrender.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
