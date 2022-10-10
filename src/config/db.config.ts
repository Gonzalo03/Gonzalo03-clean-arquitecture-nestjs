import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import { registerAs } from "@nestjs/config";

export default registerAs('dbConfig', () : TypeOrmModuleOptions=>({
    type: 'mysql',
    host: process.env.HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
}))