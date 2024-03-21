import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsService } from './departments.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { createMock } from '@golevelup/ts-jest';
import { Repository } from 'typeorm';

describe('DepartmentsService', () => {
  let service: DepartmentsService;
  let repo: Repository<Departments>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentsService,
        {
          provide: getRepositoryToken(Departments),
          useValue: createMock<Repository<Departments>>(),
        },
      ],
    }).compile();

    service = module.get<DepartmentsService>(DepartmentsService);
    repo = module.get<Repository<Departments>>(getRepositoryToken(Departments));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repo).toBeDefined();
  });
});
