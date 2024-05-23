const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')



if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  LOGS: toBool(process.env.LOGS) || true,
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE_LOGO: process.env.ALIVE_LOGO || "https://telegra.ph/file/fe6de879c1c23fb19094e.jpg",
  SESSION_ID:process.env.SESSION_ID || "",
  WARN_COUNT:process.env.WARN_COUNT || 3,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  MDB: process.env.MDB || "",
  LANG: process.env.LANG ||  'EN',
  HANDLERS: process.env.HANDLERS === 'false' || process.env.HANDLER === 'null' ? '^': '^',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "main",
  PACKNAME: process.env.PACKNAME || "Izumi",
  AUTHOR: process.env.AUTHOR || "Eypz",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || 'Izumi-v3;Eypz God;917994489493;https://telegra.ph/file/fe6de879c1c23fb19094e.jpg',
  SUDO: process.env.SUDO || "917994489493",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "Eypz God",
  BOT_NAME: process.env.BOT_NAME || "Izumi-v3",
  WORKTYPE: process.env.WORKTYPE === undefined ? "private" : process.env.WORKTYPE,
};
