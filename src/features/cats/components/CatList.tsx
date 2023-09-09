import { useFetchCats } from '@/features/cats';

export const CatList = () => {
  const { cats } = useFetchCats();
  console.log({ cats });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};
