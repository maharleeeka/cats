import { CatModel } from '../types';
import { CatCard, CatImage } from './element';
import { APP_ROUTES } from '@/constants/route';

type Props = {
  onPressCat?: () => void;
} & CatModel;

export const CatItemCard = ({ url, id }: Props) => {
  const navigateToCatInfo = () => {
    window.open(`${APP_ROUTES.ROOT}${id}`);
  };
  const renderCatCard = () => {
    return (
      <CatCard onClick={navigateToCatInfo}>
        <CatImage src={url} loading="lazy" />
      </CatCard>
    );
  };
  return <>{renderCatCard()}</>;
};
