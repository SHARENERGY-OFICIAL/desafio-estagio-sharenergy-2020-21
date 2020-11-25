const Database = require('sqlite-async')

function execute(db){
    return db.exec(
        `
        CREATE TABLE IF NOT EXISTS usina(
            id_usina INTEGER PRIMARY KEY,
            numeroUsina INTEGER,
            percentualUsina INTEGER
        );
        
    `
        
        `
        CREATE TABLE IF NOT EXISTS cliente(
            id_cliente INTEGER PRIMARY KEY,
            numeroCliente INTEGER,
            nomeCliente TEXT,
            numeroUsina INTEGER,
            FOREIGN KEY(usinas) REFERENCES usina(numeroUsina)
        );
        
    `)
    
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)   