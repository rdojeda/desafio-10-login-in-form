import "dotenv/config";

export default {
  PORT: process.env.PORT || 8080,
 
  mongoLocal: {
    client: "mongodb",
    cnxStr: "mongodb://localhost:27017/ecommerce",
  },
  mongoRemote: {
    client: "mongodb",
    cnxStr: process.env.MONGO_URI,
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: `./DB/ecommerce.sqlite`,
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
  fileSystem: {
    path: "./DB",
  },
};
