import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpCode, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {  FindOneUserDto } from './dto/findOne-user.dto';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';
import { Response, Request} from "express";
import { CookiesVerifyGuard } from 'src/cookies-verify/cookies-verify.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private auth: TokenServiceService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(CookiesVerifyGuard)
  @Get('userInfo')
  async getUserInfo(@Req() req: Request){
      return this.auth.tokenDecode(req.cookies.token)
  }

  @Post('auth')//volta o cookies para auth
  async findOne(@Body() auth: FindOneUserDto, @Res({passthrough: true}) res: Response, @Req() req: any) {
    const user =  await this.usersService.findOne(auth);
    if(!user) throw new HttpException("credenciais invalidas", 404)
    const token = this.auth.token(user)
    res.cookie('token', token, {expires: new Date(Date.now() + 43200000), httpOnly: true}).send({user, token: token});
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
