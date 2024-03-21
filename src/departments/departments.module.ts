import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { Users } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departments]), TypeOrmModule.forFeature([Users])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule { }
