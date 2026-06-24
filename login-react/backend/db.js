import mysql from "mysql";
import dotnev from "dotenv";

dotnev.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao se conectar ao banco:", err);
    }else {
        console.log("Banco conectado com sucesso");
    }
});

export default db;

