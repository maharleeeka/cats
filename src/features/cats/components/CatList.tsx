import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFetchCats } from '@/features/cats';
import { CatItemCard } from './CatItem';
import {
  CatLoaderWrapper,
  CatWrapper,
  Container,
  SearchInputWrapper,
  SearchWrapper,
  ShareButton,
} from './element';
import { CatLoader, SearchInput } from '@/components';

export const CatList = () => {
  const { fetchCatList } = useFetchCats();

  const renderCats = () => {
    return data?.map(({ id, url }, index: number) => {
      return <CatItemCard key={index} id={id} catImage={url} />;
    });
  };

  const { data, isLoading } = useQuery({
    queryKey: ['fetch-cats'],
    queryFn: () => fetchCatList(),
  });

  return (
    <Container>
      <SearchWrapper>
        <SearchInputWrapper>
          <SearchInput />
        </SearchInputWrapper>
        <ShareButton>Share your Cat with us!</ShareButton>
      </SearchWrapper>
      {isLoading ? (
        <CatLoaderWrapper>
          <CatLoader />{' '}
        </CatLoaderWrapper>
      ) : (
        <CatWrapper>{renderCats()}</CatWrapper>
      )}
    </Container>
  );
};
