import { createPool } from 'mysql2/promise';

export class ConnectionDB {
    
    connection;

    constructor(){
        this.connection = createPool({
            'host': 'localhost',
            'user': 'root',
            'database': 'cara_libro',
            'connectionLimit': 10
        });
    }

}