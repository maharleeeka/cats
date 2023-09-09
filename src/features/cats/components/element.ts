import styled from 'styled-components';

// CatList
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  height: 5em;
  background: blue;
`;

export const CatWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

// CatItem

export const CatCard = styled.div`
  display: flex;
  width: 10em;
  height: 15em;
  margin: 10px;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 25em;
  }
`;

export const CatImage = styled.img`
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 25em;
  }
`;