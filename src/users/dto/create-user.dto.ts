import {
    IsAlphanumeric,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsString,
    MinLength,
    ValidateIf,
} from 'class-validator';

export class CreateUserDto {
    @MinLength(2, { message: 'first_name must have atleast 2 characters.' })
    @IsNotEmpty()
    @IsAlphanumeric(undefined, {
        message: 'first_name does not allow other than alpha numeric chars.',
    })
    first_name: string;

    @IsNotEmpty()
    @MinLength(2, { message: 'last_name must have atleast 2 characters.' })
    @IsAlphanumeric(undefined, {
        message: 'last_name does not allow other than alpha numeric chars.',
    })
    last_name: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Please provide valid email.' })
    email: string;

    @IsNotEmpty()
    @IsString({ message: 'Please provide a department_id.' })
    department_id: string;

    @ValidateIf((_, val) => !!val)
    @IsString({ message: "title must be of type string." })
    title?: string | null;

    @ValidateIf((_, val) => !!val)
    @IsString({ message: "image must be of type string." })
    image?: string | null;
}