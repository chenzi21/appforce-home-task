import {
    IsAlphanumeric,
    IsNotEmpty,
    IsString,
    MinLength,
    ValidateIf,
} from 'class-validator';

export class CreateDepartmentDto {
    @MinLength(2, { message: 'name must have atleast 2 characters.' })
    @IsNotEmpty()
    @IsAlphanumeric(null, {
        message: 'name does not allow other than alpha numeric chars.',
    })
    name: string;

    @ValidateIf((_, val) => !!val)
    @IsString()
    description?: string | null;
}