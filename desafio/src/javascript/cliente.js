function saveCliente(database, cliente){
    return db.run(`
    INSERT INTO cliente(
        id_cliente,
        numeroCliente,
        nomeCliente,
        numeroUsina
    ) VALUES(
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        )    
    `)
}

module.exports = saveCliente;