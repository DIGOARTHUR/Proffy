import knex from 'knex'
import path from 'path'

const db = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite') // forma mais prática de direcionar caminhos utilizando 'path'
    },
    useNullAsDefault:true // injetar valores nos campos que não forem preenchidos 'NULL'
})

export default db;