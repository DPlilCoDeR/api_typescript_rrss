import { createPool } from 'mysql2/promise';

export async function connect() {
    const connect = await createPool({
        'host': 'localhost',
        'user': 'root',
        'database': 'cara_libro',
        'connectionLimit': 10
    });
    return connect
}