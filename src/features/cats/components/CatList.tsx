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
import { useGetCatsQuery } from '@/services/catApi';
import { CatModel } from '../types';

export const CatList = () => {
  const { data: cats, isLoading } = useGetCatsQuery();

  const renderCats = () => {
    return cats?.map((catItem: CatModel) => {
      return <CatItemCard key={catItem.id} {...catItem} />;
    });
  };

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
