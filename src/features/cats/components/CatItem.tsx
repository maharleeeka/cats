import { CatModel } from '../types';
import { CatCard, CatImage } from './element';

type Props = {
  onPressCat?: () => void;
} & CatModel;

export const CatItemCard = ({ url }: Props) => {
  const renderCatCard = () => {
    return (
      <CatCard>
        <CatImage src={url} loading="lazy" />
      </CatCard>
    );
  };
  return <>{renderCatCard()}</>;
};
