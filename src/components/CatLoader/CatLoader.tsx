import sittingCat from '@/assets/sittingCat.png';
import { Cat, CatWrapper } from './elements';

const CatLoader = () => {
  return (
    <CatWrapper>
      <Cat $catimage={sittingCat} />
    </CatWrapper>
  );
};

export default CatLoader;
