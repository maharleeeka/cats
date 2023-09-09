type FetchCatResponse = {
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

type CatItem = {
  catImage: string;
  id: string;
};

export type { FetchCatResponse, CatItem };
