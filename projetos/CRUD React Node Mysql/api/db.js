import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yohan@22",
    database: "CRUD",
    port: 3306,
});

