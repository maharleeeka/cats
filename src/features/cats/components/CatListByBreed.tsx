import { useLazyGetCatsQuery } from '@/services/catApi';
import { useEffect, useState } from 'react';
import { CatModel } from '../types';
import { CatItemCard } from './CatItem';
import { CatWrapper, Container } from './element';
import { CatLoader } from '@/components';

const CatListByBreed = ({ breedId }: { breedId: string }) => {
  const [cats, setCats] = useState<CatModel[] | null>(null);
  const [page, setPageNumber] = useState(0);
  const [fetchCats, { isLoading }] = useLazyGetCatsQuery();

  useEffect(() => {
    if (page) fetchCatList();
  }, [page]);

  useEffect(() => {
    fetchCatList();
  }, []);

  useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) {
        setPageNumber((prev) => prev + 1);
      }
    };
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);

  const fetchCatList = async () => {
    try {
      const resp = await fetchCats({
        limit: 20,
        page,
        breedID: breedId,
      }).unwrap();
      setCats((prev) => {
        const newCats = resp.filter(
          (cat) => !prev?.some((existingCat) => existingCat.id === cat.id),
        );
        return prev ? [...prev, ...newCats] : newCats;
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const renderCats = () => {
    return cats?.map((catItem: CatModel) => {
      return <CatItemCard key={catItem.id} {...catItem} />;
    });
  };

  return (
    <div className="py-10">
      <div className="text-2xl font-extrabold text-yellow-700">
        More like this
      </div>
      <Container>
        {isLoading ? <CatLoader /> : <CatWrapper>{renderCats()}</CatWrapper>}
      </Container>
    </div>
  );
};

export default CatListByBreed;
