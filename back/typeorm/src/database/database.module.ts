import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { from } from 'rxjs';

@Global()
@Module({
  // importar o .env
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: 'DATA_SOURCE',
      inject: [ConfigService],
      useFactory: async (config: ConfigService): Promise<DataSource> => {
        const dataSource = new DataSource({
          type: config.get<any>('DB_TYPE'),
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_DATABASE'),
          entities: [config.get<string>('DB_ENTITIES')],
          synchronize: config.get<boolean>('SYNCHRONIZE'),
          logging: config.get<boolean>('DB_LOGGING'),
        });
        return dataSource.initialize();
      },
    },
  ],
  exports: ['DATA_SOURCE'],
})
export class DatabaseModule {}
