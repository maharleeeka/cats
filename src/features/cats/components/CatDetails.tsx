import { CatLoader } from '@/components';
import { useLazyGetCatByImageIDQuery } from '@/services/catApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreedModel } from '../types';
import SocialShare from './SocialShare';
import { APP_ROUTES } from '@/constants/route';

const CatDetails = () => {
  const params = useParams();
  const id = params.id || '';

  const [catBreedInfo, setCatBreedInfo] = useState<BreedModel | null>();

  const [getCatByID, { data, isLoading }] = useLazyGetCatByImageIDQuery();
  useEffect(() => {
    if (id) getCatInfo();
  }, [id]);

  const getCatInfo = async () => {
    try {
      const resp = await getCatByID({ id: id }).unwrap();
      if (resp && resp.breeds && resp.breeds.length > 0) {
        const breed = resp.breeds[0];
        setCatBreedInfo(breed);
      }
    } catch (error) {}
  };

  const catBreed = catBreedInfo ? (
    <span>
      This is a <span className="text-yellow-700">{catBreedInfo.name}</span>{' '}
      cat.
    </span>
  ) : (
    <span>Cat breed has not been identified yet.</span>
  );

  const shareUrl = `${import.meta.env.VITE_BASE_URL}${APP_ROUTES.ROOT}${id}`;

  return (
    <div className="w-full flex justify-center">
      {isLoading && <CatLoader />}

      {data && (
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
          <img
            src={data.url}
            className="w-full md:w-auto h-auto object-cover"
            alt="Cat image"
          />
          <div className="flex flex-col p-4 gap-4">
            <SocialShare url={shareUrl} />
            <div className="text-2xl font-extrabold">{catBreed}</div>

            {catBreedInfo && (
              <div>
                <div className="p-1 text-gray-600">
                  <span className="font-bold text-yellow-500">Alt Names</span>{' '}
                  <br />
                  {catBreedInfo?.alt_names || 'None'}
                </div>
                <div className="p-1 text-gray-600">
                  <span className="font-bold text-yellow-500">Description</span>{' '}
                  <br />
                  {catBreedInfo?.description}
                </div>
                <div className="p-1  text-gray-600">
                  <span className="font-bold text-yellow-500">Temperament</span>{' '}
                  <br />
                  {catBreedInfo?.temperament}
                </div>
                <div className="p-1  text-gray-600">
                  <span className="font-bold text-yellow-500">Life Span</span>{' '}
                  <br />
                  {catBreedInfo?.life_span} years
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatDetails;
