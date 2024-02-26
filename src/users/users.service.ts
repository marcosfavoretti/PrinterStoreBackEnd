import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { FindOneUserDto } from './dto/findOne-user.dto';
import { TokenServiceService } from '../middleware/token-service/token-service.service';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>, private auth: TokenServiceService){}
  

  authToken(user: User){
    return this.auth.token(user)//mando o token para a pessoa
    //aki posso fazer a logica para ver se ja tem um token ativo antes de mandar
  }

  async create(createDto: CreateUserDto) {
    try {
      const newUser = await this.users.insert({
        ...createDto
      });
      return newUser;
    } catch (err) {
      throw err; // Propague o erro para que possa ser capturado em um nível superior.
    }
  }

  async findAll() {//acho que nao sera usado
    return await this.users.find(); 
  }

  async findOne(auth: FindOneUserDto) {
    const user = await this.users.findOne({
      where: {
        user: auth.user,
      },
    });
    if (user && auth.password === user.pass) {
      return user;
    }
    // Senha incorreta ou usuário não encontrado
    return null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
