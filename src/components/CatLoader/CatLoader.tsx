import sittingCat from '@/assets/sittingCat.png';
import { Cat, CatWrapper } from './elements';

export const CatLoader = () => {
  return (
    <CatWrapper>
      <Cat $catimage={sittingCat} />
    </CatWrapper>
  );
};
