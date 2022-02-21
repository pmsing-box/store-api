module.exports = ({ env }) => {
  return {
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env(
          "DATABASE_HOST",
          "app-92b8fdf9-6102-4a00-8817-b124bc467acc-do-user-6788285-0.b.db.ondigitalocean.com"
        ),
        port: env.int("DATABASE_PORT", 25060),
        database: env("DATABASE_NAME", "db"),
        user: env("DATABASE_USERNAME", "db"),
        password: env("DATABASE_PASSWORD", "w5HAVpAKP514ki9I"),
        // schema: env("DATABASE_SCHEMA", "public"), // Not required
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
    debug: true,
  };
};
