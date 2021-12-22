module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://learnative-server.herokuapp.com/api/:path*", // Proxy to Backend
      },
    ];
  },
};
