import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products, ProductSchema } from 'src/shared/schema/products';
import { Users, UserSchema } from 'src/shared/schema/users';
import { StripeModule } from 'nestjs-stripe';
import { ProductRepository } from 'src/shared/repositories/product.repository';
import { UserRepository } from 'src/shared/repositories/user.repository';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/shared/middleware/roles.guard';
import { AuthMiddleware } from 'src/shared/middleware/auth';
import { License, LicenseSchema } from 'src/shared/schema/license';
import { OrderSchema, Orders } from 'src/shared/schema/orders';
import { OrdersRepository } from 'src/shared/repositories/order.repository';
import configuration from 'src/config/configuration';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductRepository,
    UserRepository,
    OrdersRepository,
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  imports: [
    MongooseModule.forFeature([{ name: Products.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: License.name, schema: LicenseSchema }]),
    MongooseModule.forFeature([{ name: Orders.name, schema: OrderSchema }]),
    StripeModule.forRoot({
      apiKey: configuration.stripe.secret_key,
      apiVersion: '2022-11-15',
    }),
  ],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(AuthMiddleware)
    //   .exclude(
    //     {
    //       path: '/api/products',
    //       method: RequestMethod.GET,
    //     },
    //     {
    //       path: '/api/products/:id',
    //       method: RequestMethod.GET,
    //     },
    //   )
    //   .forRoutes(ProductsController);
  }
}
