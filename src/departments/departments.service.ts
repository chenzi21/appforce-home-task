import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments) private readonly departmentsRepository: Repository<Departments>,
  ) { }
  async insert(createDepartmentDto: CreateDepartmentDto) {
    const res = await this.departmentsRepository.insert(createDepartmentDto);
    return res.identifiers[0];
  }

  findAll() {
    return this.departmentsRepository.createQueryBuilder("d").select("d.name, d.description, COUNT(u.id) as users_count").leftJoin(Users, "u", "u.departmentId = d.id").groupBy("d.name, d.description").execute();
  }

  delete(id: string) {
    return this.departmentsRepository.delete({ id });
  }
}
