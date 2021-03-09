import {BreedModel} from './breed.model';

export interface ResponseModel {
  message: Promise<BreedModel | string[] | string>;
  status: string;
}
