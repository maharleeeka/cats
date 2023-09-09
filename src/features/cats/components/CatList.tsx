import React from 'react';
import { useFetchCats } from '@/features/cats';
import { CatItemCard } from './CatItem';
import { CatWrapper, Container, SearchWrapper } from './element';

export const CatList = () => {
  const { cats } = useFetchCats();

  const renderCats = () => {
    return cats?.map(({ id, url }, index: number) => {
      return <CatItemCard key={index} id={id} catImage={url} />;
    });
  };
  return (
    <Container>
      <SearchWrapper />
      <CatWrapper>{renderCats()}</CatWrapper>
    </Container>
  );
};
