import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { DonationModule } from './donation/donation.module';
import { PayoutModule } from './payout/payout.module';
import { PaymentModule } from './payment/payment.module';
import { MilestoneModule } from './milestone/milestone.module';
import { BankModule } from './bank/bank.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule,
    CategoryModule,
    DonationModule,
    PayoutModule,
    MilestoneModule,
    PaymentModule,
    BankModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
      serveRoot: '/public/',
    }),
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
