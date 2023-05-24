import { Module } from '@nestjs/common';

import { DogController } from './controllers/dog.controller';
import { DogService } from './services/dog.service';

@Module({
	controllers: [DogController],
	providers: [DogService]
})
export class DogModule {}
