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

export type { CatModel };
