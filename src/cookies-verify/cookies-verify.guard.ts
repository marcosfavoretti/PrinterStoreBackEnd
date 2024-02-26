import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenServiceService } from 'src/middleware/token-service/token-service.service';

@Injectable()
export class CookiesVerifyGuard implements CanActivate {
  constructor(private auth: TokenServiceService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const {token} = req.cookies;
    try{
      req.user = this.auth.tokenVerify(token)
      return true
    }    
    catch{
      console.log('false')
      return false
    }
  }
}
