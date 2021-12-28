module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '94613dac18799829a17cb2eb340440da'),
  },
});
