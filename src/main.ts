import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './responseInterceptor';

import { NextFunction, raw, Request, Response } from 'express';

import csurf from 'csurf';
const ROOT_IGNORED_PATHS = ['/api/orders/webhook'];
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
    cors: true,
  });
  app.use(cookieParser());
  app.use('/api/orders/webhook', raw({ type: '*/*' }));
  // const csrfMiddleware = csurf({
  //   cookie: true,
  // });
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   if (ROOT_IGNORED_PATHS.includes(req.path)) {
  //     return next();
  //   }
  //   return csrfMiddleware(req, res, next);
  // });
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(new TransformationInterceptor());
  await app.listen(process.env.PORT, () => {
    return console.log(`Server is running on port ${process.env.PORT}`);
  });
}
bootstrap();
