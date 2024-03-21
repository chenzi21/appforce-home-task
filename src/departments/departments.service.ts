import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { Repository } from 'typeorm';
// import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments) private readonly departmentsRepository: Repository<Departments>,
  ) { }
  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsRepository.insert(createDepartmentDto);
  }

  findAll() {
    return this.departmentsRepository.createQueryBuilder("d").select("d.id, d.name, d.description, COUNT(u.id) as users_count").leftJoin("users", "u", "u.department_id = d.id").groupBy("d.id, d.name, d.description").execute();
  }

  delete(id: string) {
    return this.departmentsRepository.delete({ id });
  }
}
