import { Injectable } from '@nestjs/common';

import { Dog } from '../models/dog.interface';
import { DogBreedGroup } from '../models/dog-breed.enum';

@Injectable()
export class DogService {

	private imageUrl = 'http://localhost:3000/api/images';

	// TODO: should serve images from the BE, look into useStaticAssets and append baseUrl to image
	private dogs: Dog[] = [
		{
			breedKey: 'labrador-retriever',
			breed: 'Labrador Retriever',
			minAverageWeight: 55,
			maxAverageWeight: 79,
			group: DogBreedGroup.Sporting,
			image: 'labrador-retriever.jpg',
			origin: 'CAN',
			intelligence: 10,
			popularity: 29,
			bio: 'Bred to be a friendly companion and a working dog, the Labrador is an ideal pet for anyone looking for a loyal and intelligent four-legged friend. With time, the Labrador dog breed became one of the most popular across the world, winning the hearts of everyone, from families to royalty and celebrities.'
		},
		{
			breedKey: 'german-sheperd',
			breed: 'German Shepherd',
			minAverageWeight: 48,
			maxAverageWeight: 88,
			group: DogBreedGroup.Herding,
			image: 'german-shepherd.jpg',
			origin: 'DEU',
			intelligence: 12,
			popularity: 23,
			bio: 'One of the most easily recognised breeds in the world, the German Shepherd Dog is a muscular, alert dog with a noble, regal attitude. They will win you over for sure with their charm but one thing\’s clear - you\’ll have to put in the work and time to gain their love as they don\’t befriend strangers that easily. Popular for their intelligence and athleticism, they enjoy playing games and spending time with their owners. If you want a German Shepherd as a companion, be prepared for abundant loyalty, fearlessness, intelligence, and definitely cuddles.'
		},
	];

	public getAllDogs(): Partial<Dog>[] {
		return this.dogs.map((dog) => ({
			breedKey: dog.breedKey,
			breed: dog.breed,
			image: dog.image,
		}));
	}

	public getDogDetails(breedKey: string): Dog {
		return this.dogs.find((dog) => dog.breedKey === breedKey);
	}
}
