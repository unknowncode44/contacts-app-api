import { DataSourceOptions } from "typeorm";

export interface AppConfiguration {
    serverPort: number,
    redis?: {
        host: string,
        port: number,
        enbled: boolean | string
    }
    database: DataSourceOptions
}

export const config: AppConfiguration = {
    serverPort: Number(process.env.SERVER_PORT) || 3000,
    redis: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: Number(process.env.REDIS_PORT) || 6379,
        enbled: process.env.REDIS_ENABLED || false,
    },
    database: {
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB || 'contacts_db',
        entities: [`${__dirname}/**/entities/*.{js,ts}`],
        synchronize: true,
    }
}