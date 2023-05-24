import { Controller, Get, Param } from '@nestjs/common';

import { DogService } from '../services/dog.service';

@Controller('dogs')
export class DogController {

	constructor(
		private readonly dogService: DogService,
	) {}

	@Get()
	public getAllDogs(): string[] {
		return this.dogService.getAllDogs();
	}

	@Get(':breed')
	public getDogDetails(@Param('breed') breed: string): any {
		return this.dogService.getDogDetails(breed);
	}
}
