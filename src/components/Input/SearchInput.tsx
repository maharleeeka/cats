import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const data = [
  {
    id: '1',
    name: 'A',
  },
];
export const SearchInput = () => {
  return (
    <>
      <ReactSearchAutocomplete items={data} />
    </>
  );
};
