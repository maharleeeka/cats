import { CatItem } from '../types';
import { CatCard, CatImage } from './element';

type Props = {
  onPressCat?: () => void;
} & CatItem;

export const CatItemCard = ({ catImage }: Props) => {
  const renderCatCard = () => {
    return (
      <CatCard>
        <CatImage src={catImage} />
      </CatCard>
    );
  };
  return <>{renderCatCard()}</>;
};
