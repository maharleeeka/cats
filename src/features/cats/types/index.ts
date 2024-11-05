type BaseParams = {
  limit: number;
  page: number;
};

type CatModel = {
  breeds: string[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: {
    id: number;
    name: string;
  }[];
};

export type { BaseParams, CatModel };
