type BaseParams = {
  limit: number;
  page: number;
};

type CatModel = {
  breeds: BreedModel[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: {
    id: number;
    name: string;
  }[];
};

type BreedModel = {
  id: string;
  name: string;
  temperament: string;
  description: string;
  life_span: string;
  alt_names: string;
};

export type { BaseParams, CatModel, BreedModel };
