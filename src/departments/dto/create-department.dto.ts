import {
    IsAlphanumeric,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateDepartmentDto {
    @MinLength(2, { message: 'first_name must have atleast 2 characters.' })
    @IsNotEmpty()
    @IsAlphanumeric(null, {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    name: string;

    @IsString()
    description: string;
}