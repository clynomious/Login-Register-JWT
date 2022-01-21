import { Sequelize } from "sequelize";

const db = new Sequelize('short_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;