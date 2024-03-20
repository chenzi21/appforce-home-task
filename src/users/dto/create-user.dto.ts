import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @MinLength(2, { message: 'first_name must have atleast 2 characters.' })
    @IsNotEmpty()
    @IsAlphanumeric(null, {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    first_name: string;

    @IsNotEmpty()
    @MinLength(2, { message: 'last_name must have atleast 2 characters.' })
    @IsAlphanumeric(null, {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    last_name: string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsNotEmpty()
    @IsString({ message: 'Please provide a department_id.' })
    department_id: string;

    @IsString({ message: "Title  must be of type string." })
    title: string;

    @IsString({ message: "Image  must be of type string." })
    image: string;
}