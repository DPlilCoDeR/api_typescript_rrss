import { createPool } from 'mysql2/promise';

export async function ConnectionDB() {
    
    const connection = await createPool({
        'host': 'localhost',
        'user': 'root',
        'database': 'cara_libro',
        'connectionLimit': 10
    });

    return connection
}