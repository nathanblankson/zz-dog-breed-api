import { Controller, Get, Param } from '@nestjs/common';

import { DogService } from '../services/dog.service';
import { Dog } from '../models/dog.interface';

@Controller('dogs')
export class DogController {

	constructor(
		private readonly dogService: DogService,
	) {}

	@Get()
	public getAllDogs(): Partial<Dog>[] {
		return this.dogService.getAllDogs();
	}

	@Get(':breedKey')
	public getDogDetails(@Param('breedKey') breedKey: string): Dog {
		return this.dogService.getDogDetails(breedKey);
	}
}
