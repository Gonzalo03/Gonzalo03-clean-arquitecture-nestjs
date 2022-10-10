import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigType<typeof dbConfig>)=>config,
      inject: [dbConfig.KEY],
    }),
    HttpModule,
    ControllersModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
