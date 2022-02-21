module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1fb8b19d3b00a9ede9903e7a8cfc6c6a'),
  },
});
