import { Injectable, HttpException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'; // Importação do jsonwebtoken
import { User } from '../entities/user.entity';
@Injectable()
export class TokenServiceService {
    private readonly secretKey = process.env.authSegredo
    private readonly settings = {
        expiresIn : "1h"
    }
    
    token(user: User){
        return jwt.sign({...user}, this.secretKey, this.settings)
    }
    
    tokenVerify(token: string){
        if(!jwt.verify(token, this.secretKey)) throw new HttpException('token invalido', 500)
        return jwt.decode(token)
    }
}   
