import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.userRepository.insert(createUserDto)
  }

  findAll() {
    return this.userRepository.createQueryBuilder("users").getMany();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto)
  }

  delete(id: string) {
    return this.userRepository.delete({ id });
  }
}
