import { Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';
import { AuctionGateway } from './auction.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction, AuctionResult } from './entity/auction.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Auction, AuctionResult]), PassportModule],
  controllers: [AuctionController],
  providers: [AuctionService, AuctionGateway],
})
export class AuctionModule {}
