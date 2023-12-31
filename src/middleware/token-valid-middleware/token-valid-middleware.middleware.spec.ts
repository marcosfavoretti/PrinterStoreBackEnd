import { TokenValidMiddlewareMiddleware } from './token-valid-middleware.middleware';

describe('TokenValidMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new TokenValidMiddlewareMiddleware()).toBeDefined();
  });
});
