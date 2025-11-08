import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,       // e.g. 'toothsketch_db'
  process.env.DB_USER!,       // e.g. 'root'
  process.env.DB_PASSWORD!,   // e.g. 'password'
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT || "3306"),
    dialect: "mysql",
    dialectOptions: {
      connectTimeout: 10000,
      acquireTimeout: 10000,
      timeout: 10000,
    },
    pool: {
      max: 10,
      min: 1,
      acquire: 10000,
      idle: 10000,
    },
    logging: console.log, // show SQL queries
  }
);

// ----------------------
// Test DB connection
// ----------------------
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully (Local)");
  } catch (error) {
    console.error("❌ Unable to connect to the local database:", error);
  }
})();
