import { Injectable, HttpException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'; // Importação do jsonwebtoken
import { User } from '../../users/entities/user.entity';
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
        try{
            jwt.verify(token, this.secretKey)
            return jwt.decode(token)

        }
        catch{
            throw new HttpException('token invalido', 500)
        }
    }
}   
