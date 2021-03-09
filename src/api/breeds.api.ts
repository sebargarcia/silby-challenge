import {BreedModel} from '../models/breed.model';
import {ResponseModel} from '../models/response.model';

//NOTE: We could separate different api endpoints (by features for example) in different
//files and export all api endpoints
//from an index.ts file in api directory

//TODO: this has to be an environment variable, so we can use different api versions
//or by environment (development, production, etc.)
const API_URL = 'https://dog.ceo/api';

export const getAllBreeds = async () => {
  try {
    const response = await fetch(`${API_URL}/breeds/list/all`);
    const responseModel = (await response.json()) as Promise<ResponseModel>;
    const breeds = (await responseModel).message as Promise<BreedModel>;
    return breeds;
  } catch (error) {
    throw error;
  }
};

export const getBreedsImages = async (
  breeds: string[],
  maxImages: number = 0,
) => {
  const fetchUrls = breeds.map((breed) =>
    maxImages === 0
      ? `${API_URL}/breed/${breed}/images`
      : `${API_URL}/breed/${breed}/images/random/${maxImages}`,
  );
  const responses = await Promise.all(fetchUrls.map((url) => fetch(url)));
  let images: string[] = [];
  for (let res of responses) {
    const responseModel = (await res.json()) as Promise<ResponseModel>;
    const data = (await (await responseModel).message) as string[];
    images = [...images, ...data];
  }
  return images;
};
