import { Injectable, NestMiddleware } from '@nestjs/common';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TokenValidMiddlewareMiddleware implements NestMiddleware {
  constructor(private token: TokenServiceService){}
  use(req: any, res: any, next: () => void) {
    const {token} = req.headers; // Acessa a propriedade 'hea' dos cabeçalhos
    const result  = this.token.tokenVerify(token)
    if(!result) res.status(401).send('Problemas de autenticação');
    next();
  }
}
