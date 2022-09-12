import sql from 'mssql';


const dbSettings = {
    user: 'josue',
    password: 'josue123',
    server: 'localhost',
    database: 'flom',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Connected to database');
        return pool;
    } catch (error) {
        console.log(error);
    }
}

getConnection();