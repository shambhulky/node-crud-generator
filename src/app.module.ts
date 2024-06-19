import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { UserEntity } from "./user/entities/user.entity";
import { UserModule } from "./user/user.module";
import { Address } from "./address/entities/address.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      password: "superuser",
      username: "postgres",
      entities: [UserEntity,Address],
      database: "blog",
      synchronize: false,
      logging: true,
    }),
    UserModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
