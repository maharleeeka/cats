import { CatItemCard } from './CatItem';
import { CatLoaderWrapper, CatWrapper, Container } from './element';
import { CatLoader } from '@/components';
import { useLazyGetCatsQuery } from '@/services/catApi';
import { CatModel } from '../types';
import { useEffect, useState } from 'react';

export const CatList = () => {
  const [fetchCats, { isLoading }] = useLazyGetCatsQuery();
  const [page, setPageNumber] = useState(0);
  const [cats, setCats] = useState<CatModel[] | null>(null);
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
      const resp = await fetchCats({ limit: 20, page }).unwrap();
      setCats((prev) => {
        const newCats = resp.filter(
          (cat) => !prev?.some((existingCat) => existingCat.id === cat.id),
        );
        return prev ? [...prev, ...newCats] : newCats;
      });
    } catch (error) {}
  };

  const renderCats = () => {
    return cats?.map((catItem: CatModel) => {
      return <CatItemCard key={catItem.id} {...catItem} />;
    });
  };

  const Loader = () => (
    <CatLoaderWrapper>
      <CatLoader />
    </CatLoaderWrapper>
  );

  return (
    <Container>
      {isLoading ? <Loader /> : <CatWrapper>{renderCats()}</CatWrapper>}
    </Container>
  );
};
