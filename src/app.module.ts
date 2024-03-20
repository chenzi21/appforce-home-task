import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { Departments } from './departments/entities/department.entity';
import { Seed1710965576268 } from './migrations/seed';

@Module({
  imports: [
    UsersModule,
    DepartmentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'password',
      username: 'postgres',
      entities: [Users, Departments],
      uuidExtension: "uuid-ossp",
      database: 'workplace',
      migrations: [Seed1710965576268],
      migrationsRun: true,
      synchronize: true,
      logging: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
