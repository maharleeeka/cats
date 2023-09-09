import { useFetchCats } from '../hooks/useFetchCats';

export const CatList = () => {
  const { cats } = useFetchCats();
  console.log({ cats });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};
