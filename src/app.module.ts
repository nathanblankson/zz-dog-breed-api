import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';

@Module({
	imports: [
		DogModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
