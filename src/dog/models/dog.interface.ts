import { DogBreedGroup } from './dog-breed.enum';

/**
 * Represents a dog.
 * @interface
 */
export interface Dog {
	breedKey: string;
	breed: string;
	/**
	 * The minimum average weight of the dog (lbs)
	 * @type {number}
	 */
	minAverageWeight: number;
	/**
	 * The maximum average weight of the dog (lbs)
	 * @type {number}
	 */
	maxAverageWeight: number;
	group: DogBreedGroup;
	image: string;
	/**
	 * The Alpha-3 country code the dog breed originated from
	 * @type {number}
	 */
	origin: string;
	intelligence: number;
	popularity: number;
	bio: string;
}
