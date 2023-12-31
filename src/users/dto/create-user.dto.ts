import { IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    user: string
    @IsString()
    pass: string
    @IsString()
    email: string
    @IsString()
    phone: string
}
