import { Controller, Post, Body, Param, Delete, Get, Res, BadRequestException } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { isUUID } from 'class-validator';
import { Response } from 'express';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }
  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException()
    }
    return this.departmentsService.delete(id);
  }
}
