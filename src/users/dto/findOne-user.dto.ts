import { IsString, IsInt } from 'class-validator';
export class FindOneUserDto {//use to login
    @IsString()
    user
    @IsString()
    password
}
