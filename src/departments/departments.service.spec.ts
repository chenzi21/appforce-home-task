import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsService } from './departments.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Users } from 'src/users/entities/user.entity';
// import { UsersService } from 'src/users/users.service';

describe('DepartmentsService', () => {
  let service: DepartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [TypeOrmModule.forFeature([Users])],
      providers: [DepartmentsService],
    }).compile();

    service = module.get<DepartmentsService>(DepartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
