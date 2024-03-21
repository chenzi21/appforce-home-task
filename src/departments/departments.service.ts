import { Injectable } from '@nestjs/common';
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
    try {
      const res = await this.departmentsRepository.insert(createDepartmentDto);
      console.log(res);
      return res.identifiers[0];
    } catch (e: any) {
      console.log(e)
    }
  }

  findAll() {
    return this.departmentsRepository.createQueryBuilder("d").select("d.name, d.description, COUNT(u.id) as users_count").leftJoin("users", "u", "u.departmentId = d.id").groupBy("d.name, d.description").execute();
  }

  delete(id: string) {
    return this.departmentsRepository.delete({ id });
  }
}
